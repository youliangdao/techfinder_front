import axios from 'axios';
import { endpoint } from 'config';
import { UserType } from 'users/types';

import { getUserAvatar } from './getUserAvatar';

export const getUser = async (id: string) => {
  const res = await axios.get<{
    data: UserType;
  }>(`${endpoint}/users/${id}`);
  const avatar = await getUserAvatar(id);
  return {
    id: res.data.data.id,
    avatar: avatar,
    nickname: res.data.data.attributes.nickname,
    description: res.data.data.attributes.description,
    twitterUsername: res.data.data.attributes.twitter_username,
    githubUsername: res.data.data.attributes.github_username,
    uid: res.data.data.attributes.uid,
  };
};
