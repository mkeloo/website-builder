import React from 'react';
import { FiChevronLeft, FiChevronDown, FiEye, FiTablet } from 'react-icons/fi';
import { IoDesktopOutline } from 'react-icons/io5';
import {
  TbDeviceMobileRotated,
  TbDeviceMobile,
  TbPackageExport,
} from 'react-icons/tb';

const Header = () => {
  return (
    <div className="flex h-screen flex-1 flex-col">
      <header className="flex h-18 items-center justify-center gap-x-6  border-b border-gray-200 bg-white px-8">
        <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
          <FiChevronLeft className="h-6 w-6 stroke-current text-gray-400" />
        </button>
        <button className="flex flex-col rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
          <div className="flex items-center gap-x-2">
            <span className="text-sm">Page: Homepage = Dipa</span>
            <FiChevronDown className="h-5 w-5 stroke-current text-gray-400" />
          </div>
          <div className="text-xs text-gray-400">https://dipainhouse.com/</div>
        </button>
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
          <FiEye className="h-5 w-5 stroke-current text-gray-400" />
          <span className="text-md font-semi-bold leading-6">Preview</span>
        </button>
        <div className="h-full w-px bg-gray-200" />
        <div className="flex items-center gap-x-3">
          <button className="rounded-xl bg-gray-100 p-2 text-blue-600">
            <IoDesktopOutline className="h-6 w-6 stroke-current" />
          </button>
          <button className="rounded-xl  p-2 text-gray-400 hover:bg-gray-100">
            <FiTablet className="h-6 w-6 stroke-current" />
          </button>
          <button className="rounded-xl  p-2 text-gray-400 hover:bg-gray-100">
            <TbDeviceMobile className="h-6 w-6 stroke-current" />
          </button>
          <button className="rounded-xl  p-2 text-gray-400 hover:bg-gray-100">
            <TbDeviceMobileRotated className="h-6 w-6 stroke-current" />
          </button>
        </div>
        <div className="h-full w-px bg-gray-200" />
        <button className="flex items-center justify-center gap-x-3 rounded-xl bg-gray-100 px-4 py-2">
          <span className="text-sm font-semibold leading-6">960 PX / 100%</span>
          <FiChevronDown className="h-6 w-6 stroke-current text-gray-400" />
        </button>
        <button className="flex items-start justify-center rounded-xl bg-gray-100 p-2 hover:bg-gray-200">
          <TbPackageExport className="h-6 w-6 stroke-current text-gray-400" />
        </button>
      </header>
    </div>
  );
};

export default Header;
