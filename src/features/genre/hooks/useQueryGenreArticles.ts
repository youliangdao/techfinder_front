import { useQuery } from '@tanstack/react-query';
import { ResponseArticleType, StockArticle } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { useParams } from 'react-router-dom';

import {
  architectureLinks,
  backendLinks,
  beginnerLinks,
  designLinks,
  frontendLinks,
  ideaLinks,
  releaseLinks,
} from '../config';

export const useQueryGenreArticles = () => {
  const params = useParams<{
    genre: string;
  }>();
  const getGenreArticles = async () => {
    const res = await axios.get<ResponseArticleType>(
      `${endpoint}/genres/${params.genre}/articles`
    );

    const articleItems = res.data?.data.map((article) => {
      return {
        id: article.id,
        title: article.attributes.title,
        date: article.attributes.date,
        media: {
          name: article.attributes.media_name,
          image: article.attributes.media_image,
        },
        image: article.attributes.image,
        link: article.attributes.link,
        stock: article.attributes.stock,
        categories: article.relationships.categories.data.flatMap(
          (category) => {
            return res.data.included
              .filter((includedData) => {
                return includedData.id === category.id;
              })
              .map((data) => ({
                title: data.attributes.name,
                path: data.attributes.path,
              }));
          }
        ),
      };
    });

    let newArticleItems: StockArticle[];

    switch (params.genre) {
      case 'beginner':
        newArticleItems = beginnerLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      case 'idea':
        newArticleItems = ideaLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      case 'design':
        newArticleItems = designLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      case 'architecture':
        newArticleItems = architectureLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      case 'backend':
        newArticleItems = backendLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      case 'frontend':
        newArticleItems = frontendLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      case 'release':
        newArticleItems = releaseLinks.map(
          (link) =>
            articleItems.filter((articleItem) => articleItem.link === link)[0]
        );
        break;
      default:
        newArticleItems = articleItems;
        break;
    }

    return newArticleItems;
  };

  const { status, data } = useQuery<StockArticle[], Error>({
    queryKey: ['genreArticles', params.genre],
    queryFn: getGenreArticles,
    staleTime: Infinity,
    onError: (error) =>
      alert(`記事情報の取得に失敗しました。\n${error.message}`),
  });

  return {
    data,
    status,
    params,
  };
};
