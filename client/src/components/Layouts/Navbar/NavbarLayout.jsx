import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const NavbarLayout = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 shadow-sm bg-white">
      <div className="max-w-[1280px] h-14 px-4 mx-auto flex items-center">
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
              className="group flex items-center absolute top-[2px] left-auto right-[2px] bottom-[2px] py-2 px-4 rounded-md text-sm hover:bg-bg-hover align-top"
            >
              <BiSearch className="group-hover:text-branded-border text-button text-2xl" />
            </button>
          </div>
        </div>
        <div className="ml-auto h-full flex items-center">
          <div className="flex">
            <Link>
              <button
                type="button"
                className="block mr-2 py-2 px-4 bg-transparent rounded-[0.375rem] text-link text-3sm font-normal hover:bg-bg-hover hover:text-link-hover hover:underline"
              >
                Log in
              </button>
            </Link>
            <Link>
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
