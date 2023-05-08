import React from 'react';
import Sidebar from './components/Sidebar';
import MiddleLayout from './components/MiddleLayout';
import Tools from './components/Tools';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans to-gray-900">
      <Sidebar />
      <MiddleLayout />
      <Tools />
    </div>
  );
}

export default App;
