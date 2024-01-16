'use client';

import { useSearchParams, useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { categories } from "@/data/manga";


const CategoryButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSelectCategory = (category: string) => {
    let newUrl = "";
      if(category && category !== "All") {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'category',
          value: category.toLowerCase()
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['category']
        })
      }
      router.push(newUrl, { scroll: false });
  }

  return (
    <>
      <div className="mt-10 mb-6 gap-x-6 text-center">
        <Button
          variant="stable"
          className={`${searchParams.get("category") === "ranking" && "rounded-full text-white bg-orange-500"} `}
          onClick={() => onSelectCategory("Ranking")}
        >
          Ranking
        </Button>
        {categories.length > 0 && categories.map((category, index) => (
          <Button
            key={index}
            value={category}
            variant="stable"
            onClick={() => onSelectCategory(category)}
            className={`${searchParams.get("category") === category.toLowerCase() && "rounded-full text-white bg-orange-500"} `}
          >
            {category}
          </Button>
        ))}
      </div>
    </>
  )
}

export default CategoryButton