import { Helmet } from "react-helmet";
import { BiSearch } from "react-icons/bi";

import SearchPostPage from "./SearchPostPage";
import SearchPodcastPage from "./SearchPodcastPage";
import SearchPeoplePage from "./SearchPeoplePage";
import SearchOrganizationPage from "./SearchOrganizationPage";
import SearchTagPage from "./SearchTagPage";
import NotFoundPage from "./NotFoundPage";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

const SearchPage = () => {
  return (
    <>
      <Helmet>
        <title>Search Results - CODE Community</title>{" "}
        {/* Kalau ada query maka jadi Search Results for ... */}
      </Helmet>
      <NavbarLayout />
      <div className="absolute top-14 left-0 right-0 bg-main">
        <div className="max-w-[1024px] mx-auto p-4">
          <div className="flex justify-between items-center mb-0 sm:mb-4 flex-wrap sm:flex-nowrap">
            <div className="block w-full md:hidden">
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
            <h2 className="hidden sm:block text-base-100 text-2xl font-semibold">
              Search Results
            </h2>{" "}
            {/* Kalau ada query maka jadi Search Results for ... */}
            <div className="flex items-center py-1 sm:py-0">
              <button
                type="button"
                className="block py-2 px-3 rounded-md hover:bg-white text-base-100 text-4sm font-semibold hover:text-branded" // Kalo active text-base-100
              >
                Most Relevant
              </button>
              <button
                type="button"
                className="block py-2 px-3 rounded-md hover:bg-white text-base-70 text-4sm font-normal hover:text-branded" // Kalo active text-base-100
              >
                Newest
              </button>
              <button
                type="button"
                className="block py-2 px-3 rounded-md hover:bg-white text-base-70 text-4sm font-normal hover:text-branded" // Kalo active text-base-100
              >
                Oldest
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-container-2 gap-x-4">
            <div className="h-max p-3 sm:p-0 overflow-x-auto">
              <div className="flex flex-row sm:flex-col">
                <button
                  type="button"
                  className="block w-max sm:w-full text-base-90 p-2 rounded-md bg-white hover:bg-white text-left text-4sm font-bold hover:text-branded-border"
                >
                  Posts
                </button>
                <button
                  type="button"
                  className="block w-max sm:w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Podcasts
                </button>
                <button
                  type="button"
                  className="block w-max sm:w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  People
                </button>
                <button
                  type="button"
                  className="block w-max sm:w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Organizations
                </button>
                <button
                  type="button"
                  className="block w-max sm:w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Tags
                </button>
                <button
                  type="button"
                  className="block w-max sm:w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Comments
                </button>
              </div>
            </div>
            <div>
              <SearchPostPage />
              {/* <SearchPodcastPage /> */}
              {/* <SearchPeoplePage /> */}
              {/* <SearchOrganizationPage /> */}
              {/* <SearchTagPage /> */}
              {/* <NotFoundPage /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
