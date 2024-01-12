import { Button } from "@/components/ui/button"

const CategoryButton = () => {
  return (
    <>
      <div className="mt-10 mb-6 gap-x-6 text-center">
        <Button variant="orange">Ranking</Button>
        <Button variant="orange">Trending</Button>
        <Button variant="orange">Popular</Button>
      </div>
    </>
  )
}

export default CategoryButton