import React from 'react';
import LogoIcon from './icons/logo.svg';
import { FiPlusSquare, FiFileText } from 'react-icons/fi';
import { TbLayoutBoard } from 'react-icons/tb';
import { RiPaletteLine } from 'react-icons/ri';
import { IoImageOutline } from 'react-icons/io5';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans to-gray-900">
      <aside className="w-18 h-screen border-r border-gray-200 bg-white flex flex-col items-center">
        <div className="h-18 w-full flex items-center justify-center border-b border-gray-200">
          <img src={LogoIcon} alt="Logo" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
          >
            <FiPlusSquare className="h-6 w-6 stroke-current" />
            <Tooltip>Add Elements (A)</Tooltip>
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <TbLayoutBoard className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <RiPaletteLine className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <FiFileText className="h-6 w-6 stroke-current" />
          </a>
          <a
            href="#"
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <IoImageOutline className="h-6 w-6 stroke-current" />
          </a>
        </nav>
      </aside>
    </div>
  );
}

export default App;
