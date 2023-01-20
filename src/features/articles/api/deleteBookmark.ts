import { Article } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { getAuth } from 'firebase/auth';

export const deleteBookmark = async ({ id }: Article) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return axios.delete(`${endpoint}/bookmarks/${id}`, config);
};
