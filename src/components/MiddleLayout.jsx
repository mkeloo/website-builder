import React from 'react';
import Header from './Header';
import Canvas from './Canvas';

const MiddleLayout = () => {
  return (
    <div className="flex h-screen flex-1 flex-col">
      <Header />
      <Canvas />
    </div>
  );
};

export default MiddleLayout;
