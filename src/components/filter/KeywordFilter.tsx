'use client'

import { FiSearch } from "react-icons/fi";

export const KeywordFilter = () => {
  

  return (
    <div className="">
      <FiSearch />
      <input 
        className="keyword"
        placeholder="One Piece"
      />
    </div>
  );
};

