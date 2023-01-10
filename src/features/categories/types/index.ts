export type Category = {
  id: string;
  title: string;
  image: string;
  path: string;
};

export type Categories = {
  categories: Category[];
};
export type CategoryItemProps = {
  category: Category;
  isLoading: boolean;
};

export type PopularCategoryListsType = Pick<
  CategoryListsType,
  'categories' | 'isLoading'
>;

export type CategoryListsType = {
  categories: Category[];
  filterInput: string;
  isLoading: boolean;
};

export type CategoryType = {
  id: string;
  attributes: {
    name: string;
    image: string;
    path: string;
  };
  type: 'category';
};

export type ResponseCategoryType = {
  data: CategoryType[];
};
