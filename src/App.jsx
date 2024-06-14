import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet /> {/* Renders the matched child route */}
      </div>
    </>
  );
}

export default App;
