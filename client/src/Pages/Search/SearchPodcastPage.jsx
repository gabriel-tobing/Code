import { Link } from "react-router-dom";

import podcast1 from "../../assets/Podcast/podcast-1.jpg";
import podcast2 from "../../assets/Podcast/podcast-2.jpg";
import podcast3 from "../../assets/Podcast/podcast-3.jpg";

const SearchPodcastPage = () => {
  return (
    <>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex">
            <Link>
              <div className="w-12 h-12 rounded-md overflow-hidden mr-2">
                <img
                  src={podcast1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="pt-2 flex-1">
              <p className="text-link -mt-[5px] text-5xs">
                S8:E4 - How You Can Be Successful Breaking Into Tech Mid-Career
              </p>
              <h2 className="text-body text-base sm:text-[1.15rem] font-semibold leading-tight break-words">
                S8:E4 - How You Can Be Successful Breaking Into Tech Mid-Career
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex">
            <Link>
              <div className="w-12 h-12 rounded-md overflow-hidden mr-2">
                <img
                  src={podcast2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="pt-2 flex-1">
              <p className="text-link -mt-[5px] text-5xs">
                Angular vs React en el 2019
              </p>
              <h2 className="text-body text-base sm:text-[1.15rem] font-semibold leading-tight break-words">
                Angular vs React en el 2019
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex">
            <Link>
              <div className="w-12 h-12 rounded-md overflow-hidden mr-2">
                <img
                  src={podcast3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="pt-2 flex-1">
              <p className="text-link -mt-[5px] text-5xs">
                Adventures in Javascriptlandia
              </p>
              <h2 className="text-body text-base sm:text-[1.15rem] font-semibold leading-tight break-words">
                Adventures in Javascriptlandia
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPodcastPage;
