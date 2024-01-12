import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const NavTopBar = () => {
  return (
    <nav className="flex gap-6 items-center">
      <div className="text-gray-500">
        Home
      </div>
      <div className="text-gray-500">
        Search
      </div>
  
      <div className="text-gray-500">
        Favorite
      </div>
  
      <div className="text-gray-500">
        Account
      </div>
      
    </nav>
  )
}

export default NavTopBar