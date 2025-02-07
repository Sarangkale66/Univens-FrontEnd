import React, { useEffect, Suspense, lazy } from 'react';
import Dashboard from './components/Dashboard';

const App2 = () => {
  return(
    <div className='h-screen w-screen flex bg-[#010102]'>
    <Dashboard/>
    </div>
  );
};

export default App2;