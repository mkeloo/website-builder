import React from 'react';
import Accordian from '../Accordian';
import {
  TbLayoutAlignBottom,
  TbLayoutAlignCenter,
  TbLayoutAlignLeft,
  TbLayoutAlignRight,
  TbLayoutAlignMiddle,
  TbLayoutAlignTop,
} from 'react-icons/tb';

const LayoutAccordian = () => {
  return (
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
  );
};

export default LayoutAccordian;
