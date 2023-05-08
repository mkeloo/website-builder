import React from 'react';
import Accordian from './Accordian';
import { FiChevronDown, FiUsers } from 'react-icons/fi';
import { IoDesktopOutline } from 'react-icons/io5';
import {
  TbLayoutAlignTop,
  TbLayoutAlignBottom,
  TbLayoutAlignCenter,
  TbLayoutAlignMiddle,
  TbLayoutAlignLeft,
  TbLayoutAlignRight,
} from 'react-icons/tb';

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
        <Accordian title="layout">
          <div className="flex items-center justify-between ">
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
              <TbLayoutAlignBottom className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
              <TbLayoutAlignCenter className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
              <TbLayoutAlignLeft className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
              <TbLayoutAlignRight className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
              <TbLayoutAlignMiddle className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
              <TbLayoutAlignTop className="h-5 w-5 stroke-current text-gray-400" />
            </button>
          </div>
        </Accordian>
        <Accordian title="spacing">
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
            <span className="absolute top-2 left-2 text-[10px] uppercase text-gray-400">
              Margin
            </span>
            <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
              Padding
            </span>
            <div className="relative w-full">
              {/*  */}
              <div className="absolute flex items-center justify-center inset-x-0 -translate-y-1/2 top-0 flex-col gap-2">
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={20}
                  type="text"
                />
                <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={0}
                  type="text"
                />
              </div>

              {/*  */}
              <div className="absolute flex items-center justify-center inset-y-0 translate-x-1/2 right-0 gap-2">
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={0}
                  type="text"
                />
                <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={0}
                  type="text"
                />
              </div>

              {/*  */}
              <div className="absolute flex items-center justify-center inset-x-0 translate-y-1/2 bottom-0 gap-2 flex-col">
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={0}
                  type="text"
                />
                <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={20}
                  type="text"
                />
              </div>

              {/*  */}
              <div className="absolute flex items-center justify-center inset-y-0 -translate-x-1/2 left-0 gap-2">
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={0}
                  type="text"
                />
                <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                <input
                  className="h-4 w-4 text-sm text-center outline-none"
                  defaultValue={0}
                  type="text"
                />
              </div>
              {/*  */}

              <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                <div className="h-full w-full rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </Accordian>
        <Accordian title="size"></Accordian>
        <Accordian title="typography"></Accordian>
        <Accordian title="position"></Accordian>
        <Accordian title="border"></Accordian>
        <Accordian title="Background"></Accordian>
      </div>
    </aside>
  );
};

export default Tools;
