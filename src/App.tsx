import './lib/tailwind.css';

import AppProvider from 'providers/app';
import React from 'react';
import AppRoutes from 'routes';

const App = () => {
  console.log(import.meta.env.VITE_APP_FIREBASE_PROJECTID);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );

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
