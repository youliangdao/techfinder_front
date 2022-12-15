import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import MainLayout from './components/Layout/MainLayout';
import CategoryFilterableArticleItems from './features/articles/CategoryFilterableArticleItems';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <HomeLayout>
        <Home />
      </HomeLayout> */}
      {/* <MainLayout>
        <FilterableCategoryItems />
      </MainLayout> */}

      {/* <MainLayout>
        <FilterableArticleItems />
      </MainLayout> */}

      <MainLayout>
        <CategoryFilterableArticleItems />
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
