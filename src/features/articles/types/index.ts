import { Category, CategoryType } from 'categories/types';
import { BaseEntity } from 'types';

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
  filterInput: string;
  isLoading: boolean;
  leftGenre: string;
  rightGenre: string;
};

export type ArticleType = {
  attributes: {
    title: string;
    date: string;
    image: string;
    item_id: string;
    link: string;
    stock: number;
  };
  relationships: {
    categories: {
      data: {
        id: string;
        type: string;
      }[];
    };
  };
} & BaseEntity;

export type ResponseArticleType = {
  data: ArticleType[] | [];
  included: CategoryType[];
  meta: {
    media: {
      name: string;
      image: string;
    };
  };
};
