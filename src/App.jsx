import React from 'react';
import LogoIcon from './icons/logo.svg';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans to-gray-900">
      <aside className="w-18 h-screen border-r border-gray-200 bg-white">
        <div>
          <img src={LogoIcon} alt="Logo" />
        </div>
      </aside>
    </div>
  );
}

export default App;
