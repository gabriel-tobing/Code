import { Link } from "react-router-dom";

import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";
import user3 from "../../assets/User/user-3.jpg";

const SearchPeoplePage = () => {
  return (
    <>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex items-center mb-2">
            <Link>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-form mr-2">
                <img
                  src={user1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <Link>
                <h3 className="text-link text-sm font-medium leading-none">
                  tobingz17
                </h3>
              </Link>
            </div>
          </div>
          <div className="pl-story-content">
            <Link to="/post-detail">
              <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                Gabriel Juninho Paulista
              </h2>
            </Link>
            <div className="flex justify-end items-center">
              <button
                type="button"
                className="p-sm bg-outline hover:bg-[#BDBDBD] rounded-md font-medium text-sm"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex items-center mb-2">
            <Link>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-form mr-2">
                <img
                  src={user2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <Link>
                <h3 className="text-link text-sm font-medium leading-none">
                  ben
                </h3>
              </Link>
            </div>
          </div>
          <div className="pl-story-content">
            <Link to="/post-detail">
              <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                Ben Halpern
              </h2>
            </Link>
            <div className="flex justify-end items-center">
              <button
                type="button"
                className="p-sm bg-outline hover:bg-[#BDBDBD] rounded-md font-medium text-sm"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex items-center mb-2">
            <Link>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-form mr-2">
                <img
                  src={user3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <Link>
                <h3 className="text-link text-sm font-medium leading-none">
                  peter
                </h3>
              </Link>
            </div>
          </div>
          <div className="pl-story-content">
            <Link to="/post-detail">
              <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                Peter Kim Frank
              </h2>
            </Link>
            <div className="flex justify-end items-center">
              <button
                type="button"
                className="p-sm bg-outline hover:bg-[#BDBDBD] rounded-md font-medium text-sm"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPeoplePage;
