import React from 'react';

import SearchInput from '../../components/SearchInput';
import ArticleItems from './ArticleItems';

const FilterableArticleItems = () => {
  return (
    <>
      <SearchInput />
      <br />
      <ArticleItems leftGenre="すべての記事" rightGenre="人気記事" />
    </>
  );
};

export default FilterableArticleItems;
