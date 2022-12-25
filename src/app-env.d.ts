/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_ENDPOINT: string;
  readonly VITE_APP_FIREBASE_APIKEY: string;
  readonly VITE_APP_FIREBASE_APP_ID: string;
  readonly VITE_APP_FIREBASE_DOMAIN: string;
  readonly VITE_APP_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_APP_FIREBASE_PROJECTID: string;
  readonly VITE_APP_FIREBASE_SENDER_ID: string;
  readonly VITE_APP_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_APP_MOCK_API_ENDPOINT: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_USER_MOCK_SERVER: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
