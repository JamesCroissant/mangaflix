import NavBottomBar from "./NavBottomBar"
import NavTopBar from "./NavTopBar"

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-3 border-b-[1px] flex justify-evenly">
          <h1 className="text-2xl font-semibold text-center md:text-left text-orange-500">Manga Flix</h1>
          <div className="hidden md:flex">
            <NavTopBar />
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 bg-white z-10 w-full">
        <div className="flex border-b-[1px] shadow-inner justify-center p-4 md:p-0">
          <NavBottomBar/>
        </div>
      </div>
    </>
  )
}

export default Navbar