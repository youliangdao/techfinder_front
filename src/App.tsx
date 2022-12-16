import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import MainLayout from './components/Layout/MainLayout';
import MyArticles from './features/users/MyArticles';

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
      {/* <MainLayout>
        <CategoryFilterableArticleItems />
      </MainLayout> */}

      {/* <MainLayout>
        <ArticleDetailCategories />
      </MainLayout> */}

      <MainLayout>
        <MyArticles />
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
