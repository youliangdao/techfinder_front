import { ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';

export const getLikes = async () => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();

  if (idToken) {
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    const res = await axios.get<ResponseArticleType>(
      `${endpoint}/articles/likes`,
      config
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
  } else {
    return [];
  }
};
