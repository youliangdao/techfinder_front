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

import NotFound from './NotFound';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="articles">
        <Route path="" element={<Navigate to="/" replace />} />
        <Route path=":articleGenre" element={<MainLayout />}>
          <Route path="" element={<FilterableArticles />} />
        </Route>
        {/* <Route path=":articleId" element={<ArticleProfile />} /> */}
        <Route path="*" element={<NotFound />} />
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
      <Route path="dashboards">
        <Route path="" element={<Navigate to="/" replace />} />
        <Route path=":genre" element={<MainLayout />}>
          <Route path="" element={<UserArticles />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
