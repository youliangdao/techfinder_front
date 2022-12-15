import React from 'react';

import SearchInput from '../../components/SearchInput';
import CategoryItems from './CategoryItems';

const FilterableCategoryItems = () => {
  return (
    <>
      <SearchInput />
      <br />
      <CategoryItems />
    </>
  );
};

export default FilterableCategoryItems;
