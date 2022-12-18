export type Comment = {
  author: {
    name: string;
    image: string;
  };
  body: string;
  postedAt: string;
};

export type CommentListsProps = {
  commentLists: Comment[];
};
