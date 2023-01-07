import axios from 'axios';
import { endpoint } from 'config';
import { UserType } from 'users/types';

export const patchProfile = async (
  nickname: string,
  description: string,
  avatar_key: string | null,
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const res = await axios.patch<UserType>(
    `${endpoint}/profile`,
    {
      nickname: nickname,
      description: description,
      avatar_key: avatar_key,
    },
    config
  );
  if (res.status !== 200) {
    throw new Error('profile post error');
  }
  return res.data;
};
