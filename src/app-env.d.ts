/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_ENDPOINT: string;
  readonly VITE_APP_MOCK_API_ENDPOINT: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_USER_MOCK_SERVER: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
