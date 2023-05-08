import React from 'react';
import Accordian from '../Accordian';

const SpacingAccordian = () => {
  return (
    <Accordian title="spacing">
      <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
        {/* <span className="absolute top-2 left-2 text-[10px] uppercase text-gray-400">
          Margin
        </span>
        <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
          Padding
        </span> */}
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
  );
};

export default SpacingAccordian;
