export const endpoint =
  import.meta.env.VITE_APP_USE_MOCK_SERVER === 'true'
    ? import.meta.env.VITE_APP_MOCK_API_ENDPOINT
    : import.meta.env.VITE_APP_API_ENDPOINT;
