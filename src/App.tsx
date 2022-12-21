import './lib/tailwind.css';

import axios from 'axios';
import { endpoint } from 'config';
import AppProvider from 'providers/app';
import React, { useEffect } from 'react';
import AppRoutes from 'routes';

const App = () => {
  useEffect(() => {
    axios.get(endpoint).then((res) => console.log(res));
  }, []);

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
