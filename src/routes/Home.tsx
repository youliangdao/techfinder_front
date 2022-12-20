import TrendArticles from 'articles/containers/TrendArticles';
import PopularCategories from 'categories/containers/PopularCategories';
import HomeLayout from 'Layout/HomeLayout';
import React from 'react';

const Home = () => {
  return (
    <HomeLayout>
      <PopularCategories />
      <TrendArticles />
    </HomeLayout>
  );
};

export default Home;
