import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

import { openSidebarMenu } from "../../../features/SidebarMenu/sidebarMenuSlice";

const NavbarLayout = () => {
  const dispatch = useDispatch();

  const handleOpenSidebarMenu = () => {
    dispatch(openSidebarMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 shadow-sm bg-white">
      <div className="max-w-[1280px] h-14 px-0 md:px-2 lg:px-4 mx-auto flex items-center">
        <button
          type="button"
          className="inline-block md:hidden p-2"
          onClick={handleOpenSidebarMenu}
        >
          <AiOutlineMenu className="text-link text-2xl mr-2" />
        </button>
        <Link to="/">
          <div className="max-w-[200px] rounded-md overflow-hidden">
            <img
              src="/logo.png"
              alt=""
              className="max-w-full h-logo object-contain inline-block align-middle"
            />
          </div>
        </Link>
        <div className="hidden md:block max-w-[420px] mx-3 flex-auto">
          <div className="flex flex-1 relative">
            <input
              type="text"
              placeholder="Search..."
              className="block w-full p-border-2 focus:outline-none border-[2px] border-form focus:border-branded rounded-md leading-normal text-body text-3sm font-normal placeholder:text-body placeholder:text-3sm placeholder:font-normal"
            />
            <button
              type="submit"
              className="group flex items-center absolute top-[2px] left-auto right-[2px] bottom-[2px] p-2 rounded-md text-sm hover:bg-bg-hover align-top"
            >
              <BiSearch className="group-hover:text-branded-border text-button text-2xl" />
            </button>
          </div>
        </div>
        <div className="ml-auto h-full flex items-center">
          <div className="flex items-center">
            <Link to="/search">
              <button
                type="button"
                className="group inline-block md:hidden p-2 bg-[#E5E5E5] mr-1 hover:bg-bg-hover rounded-md"
              >
                <BiSearch className="text-link text-2xl group-hover:text-branded" />
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="hidden md:block mr-2 py-2 px-4 bg-transparent rounded-[0.375rem] text-link text-3sm font-normal hover:bg-bg-hover hover:text-link-hover hover:underline"
              >
                Log in
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="block mr-2 py-2 px-4 bg-transparent rounded-[0.375rem] border border-branded p-border-1 text-branded text-3sm font-medium hover:bg-branded hover:border-link-hover hover:text-white hover:underline"
              >
                Create account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
