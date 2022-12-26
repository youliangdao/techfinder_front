import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store/store';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Router>{children}</Router>
          </NotificationsProvider>
        </MantineProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default AppProvider;
