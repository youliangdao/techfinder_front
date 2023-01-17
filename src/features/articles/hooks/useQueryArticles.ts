import { useQuery } from '@tanstack/react-query';
import { Article, ResponseArticleType } from 'articles/types';
import axios, { AxiosResponse } from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useParams } from 'react-router-dom';

export const useQueryArticles = () => {
  const params = useParams<{ tab: 'all' | 'popular' | undefined }>();
  const getArticles = async () => {
    const res: AxiosResponse<ResponseArticleType> = await axios.get(
      `${endpoint}/articles?tab=${params.tab}`
    );

    const articleItems = res.data?.data.map((article) => ({
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
        return res.data.included
          .filter((includedData) => {
            return includedData.id === category.id;
          })
          .map((data) => ({
            title: data.attributes.name,
            path: data.attributes.path,
          }));
      }),
    }));
    return articleItems;
  };

  const { status, data } = useQuery<Article[], Error>({
    queryKey: ['articles', params.tab],
    queryFn: getArticles,
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
