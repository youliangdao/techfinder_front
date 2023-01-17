import axios from 'axios';
import { endpoint } from 'config';
import { getAuth } from 'firebase/auth';

export const deleteBookmark = async (id: string) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  axios.delete(`${endpoint}/bookmarks/${id}`, config);
};
