import './lib/tailwind.css';

import axios from 'axios';
import { endpoint } from 'config';
import AppProvider from 'providers/app';
import React, { useEffect } from 'react';
import AppRoutes from 'routes';

const App = () => {
  useEffect(() => {
    axios
      .get(`${endpoint}/hello`)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
