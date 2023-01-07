export type User = {
  avatar: string;
  description: string;
  githubUsername: string;
  nickname: string;
  twitterUsername: string;
};

export type UserType = {
  id: string;
  attributes: {
    avatar_key: string;
    description: string;
    nickname: string;
  };
  type: 'user';
};
