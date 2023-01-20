import { Article } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { getAuth } from 'firebase/auth';

export const deleteLike = async ({ id }: Article) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return await axios.delete(`${endpoint}/likes/${id}`, config);
};
