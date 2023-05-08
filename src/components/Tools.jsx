import React from 'react';
import { FiChevronDown, FiUsers } from 'react-icons/fi';
import { IoDesktopOutline } from 'react-icons/io5';
import Accordian from './Accordian';
import LayoutAccordian from './AccordianTypes/LayoutAccordian';
import SpacingAccordian from './AccordianTypes/SpacingAccordian';
import SizeAccordian from './AccordianTypes/SizeAccordian';

const Tools = () => {
  return (
    <aside className="h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
      <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
          <FiUsers className="h-5 w-5 stroke-current text-gray-400" />
          <span className="text-sm font-semibold leading-6">Invite</span>
        </button>
        <button className="flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-2 py-2 text-sm leading-6 text-white">
          Publish
        </button>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className="text-sm font-semibold">Selector</span>
          <span className="text-sm text-gray-400">
            Inheriting{' '}
            <span className="font-medium text-gray-900">2 Selectors</span>
          </span>
        </div>
        <div className="border-b border-gray-200 px-6 py-4">
          <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
            <div className="flex items-center gap-x-2">
              <span className="rounded-lg bg-white p-1 shadow">
                <IoDesktopOutline className="h-5 w-5 stroke-current text-blue-600" />
              </span>
              <span className="text-sm font-semibold text-blue-600 rounded-lg bg-blue-100 py-1 px-3">
                H1 - hero title
              </span>
            </div>
            <FiChevronDown className="h-5 w-5 stroke-current text-gray-400" />
          </button>
          <div className="mt-2 text-xs text-gray-400">
            1 on this page, 7 on other pages
          </div>
        </div>
        {/*  */}
        <LayoutAccordian />
        <SpacingAccordian />
        <SizeAccordian />
        <Accordian title="typography"></Accordian>
        <Accordian title="position"></Accordian>
        <Accordian title="border"></Accordian>
        <Accordian title="Background"></Accordian>
      </div>
    </aside>
  );
};

export default Tools;
