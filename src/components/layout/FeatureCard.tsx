import { FaBookmark } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { MdLibraryAdd } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";


export const FeatureCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center p-4 gap-x-4 gap-y-8 m-8'>
      <div className="w-full h-full bg-rose-50 text-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <FaBookmark className="w-10 h-10 fill-orange-500 mb-4"/>
        <div className="text-black text-lg mb-2 font-semibold">Track Your Manga Favorites -</div>
        <div className="text-black">Record the titles, authors, and your reviews of the manga you&apos;ve read. </div>
      </div>
      <div className="w-full h-full bg-rose-50 text-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <FiSearch className="w-10 h-10 text-orange-500 mb-4"/>
        <div className="text-black text-lg mb-2 font-semibold">Discover New Manga -</div>
        <div className="text-black">Search and find manga tailored to your interests and recommended by others, categorized by genre for easy exploration.</div>
      </div>
      <div className="w-full h-full bg-rose-50 text-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <MdLibraryAdd className="w-10 h-10 text-orange-500 mb-4"/>
        <div className="text-black text-lg mb-2 font-semibold">My Library Feature - </div>
        <div className="text-black">Manage your personal manga collection, including a list of your sharing manga.</div>
      </div>
      <div className="w-full h-full bg-rose-50 text-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <IoShareSocialSharp className="w-10 h-10 text-orange-500 mb-4"/>
        <div className="text-black text-lg mb-2 font-semibold">Share and connect with friends - </div>
        <div className="text-black">A social hub for manga lovers to exchange reviews, favorites, and discover new fan communities.</div>
      </div>
    </div>
  )
}