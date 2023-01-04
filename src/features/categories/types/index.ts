import { BaseEntity } from 'types';

export type Category = {
  id: string;
  title: string;
  image: string;
  path: string;
};

export type Categories = {
  categories: Category[];
};

export type CategoryListsType = {
  categories: Category[];
  filterInput: string;
};

export type CategoryType = {
  attributes: {
    name: string;
    image: string;
    path: string;
  };
} & BaseEntity;

export type ResponseCategoryType = {
  data: CategoryType[];
};
