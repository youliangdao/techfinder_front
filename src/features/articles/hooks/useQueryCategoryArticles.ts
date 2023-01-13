import { useQuery } from '@tanstack/react-query';
import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useParams } from 'react-router-dom';

export const useQueryCategoryArticles = () => {
  const params = useParams<{
    categoryName: string;
    tab: 'all' | 'popular';
  }>();
  const fetchCategoryArticles = async () => {
    const res = await axios.get<ResponseArticleType>(
      `${endpoint}/${params.categoryName}/articles?tab=${params.tab}`
    );
    return res.data;
  };

  const { status, data } = useQuery<ResponseArticleType, Error>({
    queryKey: ['categoryArticles', params.categoryName, params.tab],
    queryFn: fetchCategoryArticles,
    staleTime: Infinity,
    onError: (error) =>
      alert(`記事情報の取得に失敗しました。\n${error.message}`),
  });

  const articleItems = data?.data.map((article) => ({
    id: article.id,
    title: article.attributes.title,
    date: formatDistanceToNow(new Date(article.attributes.date), {
      addSuffix: true,
      locale: ja,
    }),
    media: {
      name: article.attributes.media_name,
      image: article.attributes.media_image,
    },
    image: article.attributes.image,
    link: article.attributes.link,
    categories: article.relationships.categories.data.flatMap((category) => {
      return data.included
        .filter((includedData) => {
          return includedData.id === category.id;
        })
        .map((data) => ({
          title: data.attributes.name,
          path: data.attributes.path,
        }));
    }),
  }));

  return {
    articleItems,
    status,
    params,
  };
};
