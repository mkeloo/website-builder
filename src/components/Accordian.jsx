import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Accordian = ({ title, children }) => {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <span className="text-sm font-semibold capitalize">{title}</span>
        <FiChevronDown className="h-5 w-5 stroke-current text-gray-400 rotate-90 group-open:rotate-0 duration-200 transition-transform" />
      </summary>
      <div className="border-b border-gray-200 px-6 py-4">{children}</div>
    </details>
  );
};

export default Accordian;
