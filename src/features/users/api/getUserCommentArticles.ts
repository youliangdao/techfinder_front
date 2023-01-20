import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';

export const getUserCommentArticles = async (id: string) => {
  const res = await axios.get<ResponseArticleType>(
    `${endpoint}/users/${id}/comments`
  );
  return res.data.data.map((article) => ({
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
};
