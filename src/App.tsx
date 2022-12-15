import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import MainLayout from './components/Layout/MainLayout';
import FilterableArticleItems from './features/articles/FilterableArticleItems';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <HomeLayout>
        <Home />
      </HomeLayout> */}
      {/* <MainLayout>
        <FilterableCategoryItems />
      </MainLayout> */}

      <MainLayout>
        <FilterableArticleItems />
      </MainLayout>
      {/* <SearchInput />
      <ArticleItem {...articleItem} />
      <Space h="md" />
      <ArticleDetail {...articleItem} />
      <Space h="md" />
      <CategoryItemsList /> */}
    </MantineProvider>
  );
};

export default App;
