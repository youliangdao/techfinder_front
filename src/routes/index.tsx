import CategoryFilterableArticles from 'articles/containers/CategoryFilterableArticles';
import FilterableArticles from 'articles/containers/FilterableArticles';
import RegisterForm from 'auth/components/RegisterForm';
import LoginImage from 'auth/containers/LoginImage';
import FilterableCategoryLists from 'categories/containers/FilterableCategoryLists';
import MainLayout from 'Layout/MainLayout';
import { useFirebaseAuth } from 'lib/auth/firebaseAuth';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from 'routes/Home';
import { RouteAuthGuard } from 'routes/RouteAuthGuard';
import UserArticles from 'users/routes/UserArticles';
import UserProfile from 'users/routes/UserProfile';

import NotFound from './NotFound';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();
  const { currentUser } = useFirebaseAuth();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="articles" element={<MainLayout />}>
        <Route index element={<FilterableArticles />} />
        {/* <Route path=":articleId" element={<ArticleProfile />} /> */}
        {/* <Route path="*" element={<NotFoundTitle />} /> */}
      </Route>
      <Route path="categories" element={<MainLayout />}>
        <Route index element={<FilterableCategoryLists />} />
        <Route path=":categoryName" element={<CategoryFilterableArticles />} />
        {/* <Route path="*" element={<NotFoundTitle />} /> */}
      </Route>
      <Route
        path="profile"
        element={
          <RouteAuthGuard component={<UserProfile />} redirect="/login" />
        }
      />
      <Route path="dashboards" element={<MainLayout />}>
        <Route
          index
          element={
            <RouteAuthGuard component={<UserArticles />} redirect="/login" />
          }
        />
      </Route>
      <Route
        path="onboarding"
        element={<RouteAuthGuard component={<RegisterForm />} redirect="/" />}
      />
      <Route path="login" element={<LoginImage />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
