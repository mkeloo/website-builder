import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Tools from './components/Tools';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans to-gray-900">
      <Sidebar />
      <Header />
      <Tools />
    </div>
  );
}

export default App;
