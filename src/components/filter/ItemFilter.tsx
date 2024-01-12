'use client'

import { CategoryFilter } from "./CategoryFilter"
import { GenreFilter } from "./GenreFilter"
import { KeywordFilter } from "./KeywordFilter"
import { ResetButton } from "./ResetButton"
import { SortField } from "./SortField"


const ItemFilter = () => {

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-10 w-[400px]">
          <KeywordFilter />
          <div className="grid grid-cols-3 my-5">
            <div className="flex flex-col items-center">
              <GenreFilter />
            </div>
            <div className="flex flex-col items-center">
              <CategoryFilter />
            </div>
            <div className="flex flex-col items-center">
              <SortField/>
            </div>
          </div>
          <ResetButton/>
        </div>
      </div>
      
    </>
  );
};

export default ItemFilter