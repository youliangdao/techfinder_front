import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import FilterableCategoryItems from './components/Category/FilterableCategoryItems';
import MainLayout from './components/Layout/MainLayout';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <MainLayout>
        <Home />
      </MainLayout> */}
      <MainLayout>
        <FilterableCategoryItems />
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
