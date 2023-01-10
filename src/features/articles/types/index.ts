import { Category, CategoryType } from 'categories/types';

export type Article = {
  id: string;
  title: string;
  categories: Pick<Category, 'title' | 'path'>[];
  date: string;
  image: string;
  link: string;
  media: {
    name: string;
    image: string;
  };
};

export type ArticleListsProps = {
  articleItems: Article[];
  isLoading: boolean;
  leftGenre: string;
  rightGenre: string;
};

export type ArticleType = {
  id: string;
  attributes: {
    title: string;
    date: string;
    image: string;
    item_id: string;
    link: string;
    media_image: string;
    media_name: string;
    stock: number;
  };
  relationships: {
    categories: {
      data: {
        id: string;
        type: 'category';
      }[];
    };
  };
  type: 'article';
};

export type ResponseArticleType = {
  data: ArticleType[] | [];
  included: CategoryType[];
  // meta: {
  //   media: {
  //     name: string;
  //     image: string;
  //   };
  // };
};

export type LikeCounts = {
  count: number;
  status: 'ok';
};

export type BookmarkCounts = {
  count: number;
  status: 'ok';
};
