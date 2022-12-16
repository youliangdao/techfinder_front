import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import MainLayout from './components/Layout/MainLayout';
import Profile from './features/users/Profile';

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
      {/* <MainLayout>
        <MyArticles />
      </MainLayout> */}
      <MainLayout>
        <Profile />
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
