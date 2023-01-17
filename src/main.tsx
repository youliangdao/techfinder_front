import './lib/tailwind.css';

import firebaseConfig from 'config/firebase-config';
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const prepare = async () => {
  if (
    import.meta.env.MODE === 'development' &&
    import.meta.env.VITE_APP_USE_MOCK_SERVER === 'true'
  ) {
    const { worker } = await import('./test/browser');
    worker.start();
  }
};
const app = initializeApp(firebaseConfig);

// prepareが完了した後にアプリケーションをマウントする
prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
