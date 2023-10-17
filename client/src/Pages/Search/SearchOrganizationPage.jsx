import { Link } from "react-router-dom";

import organization1 from "../../assets/Organization/organization-1.jpg";
import organization2 from "../../assets/Organization/organization-2.jpg";
import organization3 from "../../assets/Organization/organization-3.jpg";

const SearchOrganizationPage = () => {
  return (
    <>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex gap-x-2">
            <Link>
              <div className="w-12 h-12 overflow-hidden mr-2">
                <img
                  src={organization1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <h3 className="py-1 leading-tight text-[1.05rem] sm:text-[1.15rem] text-base-90 font-semibold">
                007vikaxhorg
              </h3>
              <p className="text-3sm opacity-50 font-normal">@humanitycoding</p>
              <p className="text-base-90 text-4sm mt-4 line-clamp-3">
                For community by community
              </p>
            </div>
            <div className="ml-auto">
              <button
                type="button"
                className="block p-sm bg-branded rounded-md text-5sm font-medium hover:bg-branded-border text-white"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex gap-x-2">
            <Link>
              <div className="w-12 h-12 overflow-hidden mr-2">
                <img
                  src={organization2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <h3 className="py-1 leading-tight text-[1.05rem] sm:text-[1.15rem] text-base-90 font-semibold">
                0bsilab
              </h3>
              <p className="text-3sm opacity-50 font-normal">@obsilab</p>
              <p className="text-base-90 text-4sm mt-4 line-clamp-3">0bsilab</p>
            </div>
            <div className="ml-auto">
              <button
                type="button"
                className="block p-sm bg-branded rounded-md text-5sm font-medium hover:bg-branded-border text-white"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex gap-x-2">
            <Link>
              <div className="w-12 h-12 overflow-hidden mr-2">
                <img
                  src={organization3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <h3 className="py-1 leading-tight text-[1.05rem] sm:text-[1.15rem] text-base-90 font-semibold">
                0xWork
              </h3>
              <p className="text-3sm opacity-50 font-normal">@0xwork</p>
              <p className="text-base-90 text-4sm mt-4 line-clamp-3"></p>
            </div>
            <div className="ml-auto">
              <button
                type="button"
                className="block p-sm bg-branded rounded-md text-5sm font-medium hover:bg-branded-border text-white"
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

export default SearchOrganizationPage;
