import './lib/tailwind.css';

import TrendArticles from 'articles/containers/TrendArticles';
import PopularCategories from 'categories/containers/PopularCategories';
import HomeLayout from 'Layout/HomeLayout';
import AppProvider from 'providers/app';
import React from 'react';

const App = () => {
  return (
    <AppProvider>
      <HomeLayout>
        <PopularCategories />
        <TrendArticles />
      </HomeLayout>
    </AppProvider>
  );
  {
    /* <MainLayout>
        <FilterableCategoryLists />
      </MainLayout> */
  }

  {
    /* <MainLayout>
        <FilterableArticles />
      </MainLayout> */
  }
  {
    /* <MainLayout>
        <CategoryFilterableArticles />
      </MainLayout> */
  }

  {
    /* <MainLayout>
        <ArticleProfile />
      </MainLayout> */
  }
  {
    /* <MainLayout>
        <MyArticles />
      </MainLayout> */
  }
  {
    /* <MainLayout>
        <Profile />
      </MainLayout> */
  }
  {
    /* <RegisterForm /> */
  }
};

export default App;
