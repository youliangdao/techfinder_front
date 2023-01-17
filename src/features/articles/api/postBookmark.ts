import { ResponseBookmarkPostType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';

export const postBookmark = async (id: string) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  const res = await axios.post<ResponseBookmarkPostType>(
    `${endpoint}/bookmarks`,
    {
      article_id: id,
    },
    config
  );

  return {
    id: res.data.data.id,
    title: res.data.data.attributes.title,
    date: formatDistanceToNow(new Date(res.data.data.attributes.date), {
      addSuffix: true,
      locale: ja,
    }),
    media: {
      name: res.data.data.attributes.media_name,
      image: res.data.data.attributes.media_image,
    },
    image: res.data.data.attributes.image,
    link: res.data.data.attributes.link,
    categories: res.data.data.relationships.categories.data.flatMap(
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
};
