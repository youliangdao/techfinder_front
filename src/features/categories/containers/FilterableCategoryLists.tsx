import { useQueryCategories } from 'categories/hooks/useQueryCategories';
import React, { useState } from 'react';

import SearchInput from '../../../components/SearchInput';
import CategoryLists from '../components/CategoryLists';

const FilterableCategoryLists = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const { status, data } = useQueryCategories();

  const categories = data?.map((category) => ({
    id: category.id,
    title: category.attributes.name,
    image: category.attributes.image,
    path: category.attributes.path,
  }));

  return (
    <>
      <SearchInput {...{ filterInput, setFilterInput }} />
      <br />
      <CategoryLists
        filterInput={filterInput}
        categories={categories ? categories : []}
        isLoading={status === 'loading'}
      />
    </>
  );
};

export default FilterableCategoryLists;
