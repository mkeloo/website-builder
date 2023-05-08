import React from 'react';
import LogoIcon from '../icons/logo.svg';
import {
  FiPlusSquare,
  FiFileText,
  FiAlertCircle,
  FiSettings,
} from 'react-icons/fi';
import { TbLayoutBoard } from 'react-icons/tb';
import { RiPaletteLine } from 'react-icons/ri';
import { IoImageOutline } from 'react-icons/io5';
import Tooltip from './Tooltip';

const Sidebar = () => {
  return (
    <aside className="w-18 h-screen border-r border-gray-200 bg-white flex flex-col items-center">
      <div className="h-18 w-full flex items-center justify-center border-b border-gray-200">
        <img
          src={LogoIcon}
          alt="Logo"
          className=" duration-300 hover:scale-110"
        />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <a
          href="#"
          className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
        >
          <FiPlusSquare className="h-6 w-6 stroke-current" />
          <Tooltip>
            Add Elements <span className="text-gray-400">(A)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
        >
          <TbLayoutBoard className="h-6 w-6 stroke-current" />
          <Tooltip>
            Layout <span className="text-gray-400">(Y)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
        >
          <RiPaletteLine className="h-6 w-6 stroke-current" />
          <Tooltip>
            Themes <span className="text-gray-400">(T)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
        >
          <FiFileText className="h-6 w-6 stroke-current" />
          <Tooltip>
            Assets <span className="text-gray-400">(U)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
        >
          <IoImageOutline className="h-6 w-6 stroke-current" />
          <Tooltip>
            Images <span className="text-gray-400">(I)</span>
          </Tooltip>
        </a>
      </nav>
      <div className="flex flex-col items-center gap-y-4 py-10">
        <button
          href="#"
          className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
        >
          <FiAlertCircle className="h-6 w-6 stroke-current" />
          <Tooltip>
            Help <span className="text-gray-400">(H)</span>
          </Tooltip>
        </button>
        <button
          href="#"
          className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
        >
          <FiSettings className="h-6 w-6 stroke-current" />
          <Tooltip>
            Settings <span className="text-gray-400">(S)</span>
          </Tooltip>
        </button>
        <button className="overflow-hidden rounded-full pt-2 duration-300 hover:scale-110">
          <img
            src="../../img/avatar.png"
            alt="avatar"
            className="h-10 w-10 object-cover"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
