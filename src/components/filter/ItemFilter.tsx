'use client'

import { CategoryFilter } from "./CategoryFilter"
import { GenreFilter } from "./GenreFilter"
import { KeywordFilter } from "./KeywordFilter"
import { SortField } from "./SortField"

const ItemFilter = () => {

  return (
    <>
      <div className="flex flex-col justify-center mb-10">
        <div className="relative flex justify-center">
          <KeywordFilter/>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-y-4 items-center md:flex-row md:justify-center gap-x-4 mt-8 mb-9">
            <GenreFilter />
            <CategoryFilter />
            <SortField/>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ItemFilter