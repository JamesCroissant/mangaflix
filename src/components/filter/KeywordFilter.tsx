'use client'

import { FiSearch } from "react-icons/fi";


export const KeywordFilter = () => {
  return (
    <div className="relative flex justify-center">
      <label className="relative block">
        <FiSearch
          className="absolute top-3.5 left-3 text-gray-500"
        />
        <span className="sr-only"></span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input 
          className="placeholder:text-slate-500 block bg-violet-50 w-[400px] border border-violet-50 rounded-xl py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1 sm:text-sm" 
          placeholder="One Piece" 
          type="text" 
          name="search"
        />
      </label>
    </div>
  );
};

