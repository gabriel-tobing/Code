import { Helmet } from "react-helmet";

import SearchPostPage from "./SearchPostPage";
import SearchPodcastPage from "./SearchPodcastPage";
import SearchPeoplePage from "./SearchPeoplePage";
import SearchOrganizationPage from "./SearchOrganizationPage";

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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base-100 text-2xl font-semibold">
              Search Results
            </h2>{" "}
            {/* Kalau ada query maka jadi Search Results for ... */}
            <div className="flex items-center">
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
          <div className="grid grid-cols-container-2 gap-x-4">
            <div className="h-max">
              <div className="flex flex-col">
                <button
                  type="button"
                  className="block w-full text-base-90 p-2 rounded-md bg-white hover:bg-white text-left text-4sm font-bold hover:text-branded-border"
                >
                  Posts
                </button>
                <button
                  type="button"
                  className="block w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Podcasts
                </button>
                <button
                  type="button"
                  className="block w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  People
                </button>
                <button
                  type="button"
                  className="block w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Organizations
                </button>
                <button
                  type="button"
                  className="block w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Tags
                </button>
                <button
                  type="button"
                  className="block w-full text-base-90 p-2 rounded-md hover:bg-white text-left text-4sm font-normal hover:text-branded-border"
                >
                  Comments
                </button>
              </div>
            </div>
            <div>
              {/* <SearchPostPage /> */}
              {/* <SearchPodcastPage /> */}
              {/* <SearchPeoplePage /> */}
              <SearchOrganizationPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
