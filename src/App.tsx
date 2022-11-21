import './App.css';

import React from 'react';

function App() {
  console.log(import.meta.env);

  return (
    <>
      <p>{import.meta.env.VITE_APP_TITLE}</p>
    </>
  );
}

export default App;
