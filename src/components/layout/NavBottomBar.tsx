import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const NavBottomBar = () => {
  return (
    <nav className="flex gap-8 sm:gap-20 items-center">
      <div className="flex flex-col items-center">
        <div className="">
          <RiHomeFill />
        </div>
        <div className="text-gray-500 mt-1">
          Home
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <FiSearch />
        </div>
        <div className="text-gray-500 mt-1">
          Search
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <FaRegBookmark />
        </div>
        <div className="text-gray-500 mt-1">
          Favorite
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <FaUser />
        </div>
        <div className="text-gray-500 mt-1">
          Account
        </div>
      </div>
    </nav>
  )
}

export default NavBottomBar