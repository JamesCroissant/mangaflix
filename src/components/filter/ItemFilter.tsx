'use client'

import { CategoryFilter } from "./CategoryFilter"
import { GenreFilter } from "./GenreFilter"
import { KeywordFilter } from "./KeywordFilter"
import { ResetButton } from "./ResetButton"
import { SortField } from "./SortField"

const ItemFilter = () => {

  return (
    <>
      <div>
        <div className="item-filter">
          <KeywordFilter />
          <div className="grid grid-cols-2">
            <div>
              <GenreFilter />
            </div>
            <div>
              <CategoryFilter />
            </div>
            <div>
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