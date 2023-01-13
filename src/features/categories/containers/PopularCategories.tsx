import { useQueryPopularCategories } from 'categories/hooks/useQueryPopularCategories';
import React from 'react';

import PopularCategoryLists from '../components/PopularCategoryLists';

const PopularCategories = () => {
  const { status, data } = useQueryPopularCategories();
  const categories = data?.map((category) => ({
    id: category.id,
    title: category.attributes.name,
    image: category.attributes.image,
    path: category.attributes.path,
  }));

  return (
    <PopularCategoryLists
      categories={categories ? categories : []}
      isLoading={status === 'loading'}
    />
  );
};

export default PopularCategories;
