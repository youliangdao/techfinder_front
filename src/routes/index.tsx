import CategoryFilterableArticles from 'articles/containers/CategoryFilterableArticles';
import FilterableArticles from 'articles/containers/FilterableArticles';
import FilterableCategoryLists from 'categories/containers/FilterableCategoryLists';
import NotFoundTitle from 'components/NotFoundTitle';
import MainLayout from 'Layout/MainLayout';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'routes/Home';
import UserArticles from 'users/routes/UserArticles';
import UserProfile from 'users/routes/UserProfile';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="articles" element={<MainLayout />}>
        <Route path=":articleGenre" element={<FilterableArticles />} />
        {/* <Route path=":articleId" element={<ArticleProfile />} /> */}
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="categories" element={<MainLayout />}>
        <Route path="" element={<FilterableCategoryLists />} />
        <Route
          path=":categoryName/:articleGenre"
          element={<CategoryFilterableArticles />}
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="profile" element={<UserProfile />} />
      <Route path="dashboards" element={<MainLayout />}>
        <Route path=":genre" element={<UserArticles />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
