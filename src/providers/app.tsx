import { MantineProvider } from '@mantine/core';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </Provider>
  );
};

export default AppProvider;
