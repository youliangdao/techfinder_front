import './lib/tailwind.css';

import FilterableCategoryLists from 'categories/containers/FilterableCategoryLists';
import MainLayout from 'Layout/MainLayout';
import AppProvider from 'providers/app';
import React from 'react';

const App = () => {
  return (
    <AppProvider>
      {/* <HomeLayout>
        <PopularCategories />
        <TrendArticles />
      </HomeLayout> */}
      <MainLayout>
        <FilterableCategoryLists />
      </MainLayout>
    </AppProvider>
  );
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
