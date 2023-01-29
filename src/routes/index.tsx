import CategoryFilterableArticles from 'articles/containers/CategoryFilterableArticles';
import FilterableArticles from 'articles/containers/FilterableArticles';
import RegisterForm from 'auth/components/RegisterForm';
import LoginImage from 'auth/containers/LoginImage';
import FilterableCategoryLists from 'categories/containers/FilterableCategoryLists';
import About from 'components/About';
import { Head } from 'components/Head/Head';
import NotFoundTitle from 'components/NotFoundTitle';
import PrivacyPolicy from 'components/PrivacyPolicy';
import Terms from 'components/Terms';
import GenreFilterableArticles from 'features/genre/containers/GenreFilterableArticles';
import { usePageViewsTracking } from 'hooks/usePageViewsTracking';
import GenreLayout from 'Layout/GenreLayout';
import MainLayout from 'Layout/MainLayout';
import UserLayout from 'Layout/UserLayout';
import { useFirebaseAuth } from 'lib/auth/firebaseAuth';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'routes/Home';
import { RouteAuthGuard } from 'routes/RouteAuthGuard';
import LoginUserArticles from 'users/routes/LoginUserArticles';
import UserArticles from 'users/routes/UserArticles';
import UserProfile from 'users/routes/UserProfile';

import NotFound from './NotFound';

const AppRoutes = () => {
  const { hash, pathname } = useLocation();
  const { currentUser } = useFirebaseAuth();

  usePageViewsTracking();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="articles" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path=":tab" element={<FilterableArticles />} />
        <Route path=":tab/search" element={<FilterableArticles />} />
        {/* <Route index element={<FilterableArticles />} /> */}
        {/* <Route path=":articleId" element={<ArticleProfile />} /> */}
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="categories" element={<MainLayout />}>
        <Route index element={<FilterableCategoryLists />} />
        <Route path=":categoryName">
          <Route index element={<Navigate to="/categories" replace />} />
          <Route path=":tab" element={<CategoryFilterableArticles />} />
          <Route path=":tab/search" element={<CategoryFilterableArticles />} />
          <Route path="*" element={<NotFoundTitle />} />
        </Route>
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="users" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path=":userId">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":tab" element={<UserArticles />} />
        </Route>
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route
        path="profile"
        element={<RouteAuthGuard component={<UserProfile />} redirect="/" />}
      />
      <Route path="dashboards" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route
          path=":tab"
          element={
            <RouteAuthGuard component={<LoginUserArticles />} redirect="/" />
          }
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route
        path="onboarding"
        element={<RouteAuthGuard component={<RegisterForm />} redirect="/" />}
      />
      <Route path="login" element={<LoginImage />} />
      <Route
        path="about"
        element={
          <UserLayout>
            <Head title="TechFinderについて" />
            <About />
          </UserLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <UserLayout>
            <Head title="プライバシーポリシー" />
            <PrivacyPolicy />
          </UserLayout>
        }
      />
      <Route
        path="/terms"
        element={
          <UserLayout>
            <Head title="利用規約" />
            <Terms />
          </UserLayout>
        }
      />
      <Route path="/genres" element={<GenreLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path=":genre" element={<GenreFilterableArticles />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
