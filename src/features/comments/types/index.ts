import { Article } from 'articles/types';
import { UserType } from 'users/types';

export type Comment = {
  id: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  body: string;
  postedAt: string;
};

export type CommentListsProps = {
  article: Article;
  close: () => void;
  commentLists: Comment[];
};

export type CommentItemProps = {
  article: Article;
  close: () => void;
  comment: Comment;
};

export type CommentType = {
  id: string;
  attributes: {
    body: string;
    created_at: string;
  };
  relationships: {
    user: {
      data: {
        id: string;
        type: string;
      };
    };
  };
  type: 'comment';
};

export type ResponseCommentType = {
  data: CommentType[] | [];
  included: UserType[];
};

export type ResponsePostCommentType = {
  data: CommentType;
  included: UserType[];
};
