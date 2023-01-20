import { Article } from 'articles/types';

export type User = {
  avatar: string;
  description: string;
  githubUsername: string;
  nickname: string;
  twitterUsername: string;
  uid: string;
};

export type UserType = {
  id: string;
  attributes: {
    avatar_key: string;
    description: string;
    github_username: string;
    nickname: string;
    twitter_username: string;
    uid: string;
  };
  type: 'user';
};

export type ResponseUserType = {
  data: UserType;
};

export type UserArticleListsType = {
  articleItems: Article[];
  genres: {
    name: string;
    path: string;
  }[];
  isLoading: boolean;
  isLoginUser: boolean;
};
