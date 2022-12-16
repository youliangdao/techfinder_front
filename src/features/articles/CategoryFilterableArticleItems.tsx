import { Space } from '@mantine/core';
import React from 'react';

import SearchInput from '../../components/SearchInput';
import ArticleItems from './ArticleItems';
import CategoryArticlesHeader from './CategoryArticlesHeader';

const CategoryFilterableArticleItems = () => {
  return (
    <>
      <CategoryArticlesHeader />
      <Space h="lg" />
      <SearchInput />
      <Space h="lg" />
      <ArticleItems leftGenre="すべての記事" rightGenre="人気記事" />
    </>
  );
};

export default CategoryFilterableArticleItems;
