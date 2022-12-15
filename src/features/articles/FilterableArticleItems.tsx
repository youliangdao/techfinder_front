import React from 'react';

import SearchInput from '../../components/SearchInput';
import ArticleItems from './ArticleItems';

const FilterableArticleItems = () => {
  return (
    <>
      <SearchInput />
      <br />
      <ArticleItems />
    </>
  );
};

export default FilterableArticleItems;
