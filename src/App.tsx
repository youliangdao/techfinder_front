import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import RegisterForm from './features/auth/RegisterForm';

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
      {/* <MainLayout>
        <Profile />
      </MainLayout> */}
      <RegisterForm />
    </MantineProvider>
  );
};

export default App;
