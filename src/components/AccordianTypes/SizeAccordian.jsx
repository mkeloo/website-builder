import React from 'react';
import Accordian from '../Accordian';
import { FiEye, FiChevronDown } from 'react-icons/fi';

const SizeAccordian = () => {
  return (
    <Accordian title="size">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <div className="absolute flex items-center px-4 inset-y-0 pointer-events-none ">
            <span className="text-sm text-gray-400">W</span>
          </div>
          <input
            type="text"
            defaultValue="Auto"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
          />
        </div>

        {/*  */}
        <div className="relative">
          <div className="absolute flex items-center px-4 inset-y-0 pointer-events-none ">
            <span className="text-sm text-gray-400">H</span>
          </div>
          <input
            type="text"
            defaultValue="Auto"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
          />
        </div>

        {/*  */}
        <div className="relative">
          <div className="absolute flex items-center px-4 inset-y-0 pointer-events-none ">
            <span className="text-sm text-gray-400">Min W</span>
          </div>
          <input
            type="text"
            defaultValue="Auto"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
          />
        </div>

        {/*  */}
        <div className="relative">
          <div className="absolute flex items-center px-4 inset-y-0 pointer-events-none ">
            <span className="text-sm text-gray-400">Min H</span>
          </div>
          <input
            type="text"
            defaultValue="Auto"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
          />
        </div>

        {/*  */}
        <div className="relative">
          <div className="absolute flex items-center px-4 inset-y-0 pointer-events-none ">
            <span className="text-sm text-gray-400">Max W</span>
          </div>
          <input
            type="text"
            defaultValue="Auto"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
          />
        </div>

        {/*  */}
        <div className="relative">
          <div className="absolute flex items-center px-4 inset-y-0 pointer-events-none ">
            <span className="text-sm text-gray-400">Max H</span>
          </div>
          <input
            type="text"
            defaultValue="Auto"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
          />
        </div>

        <div className="col-span-2">
          <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
            <div className="absolute inset-y-0 flex items-center px-4">
              <span className="text-sm text-gray-400">Overflow</span>
            </div>
            <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
              <FiEye className="h-5 w-5 stroke-current text-gray-400" />
              <span>Invisible</span>
            </span>
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <FiChevronDown className="h-5 w-5 stroke-current text-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </Accordian>
  );
};

export default SizeAccordian;
