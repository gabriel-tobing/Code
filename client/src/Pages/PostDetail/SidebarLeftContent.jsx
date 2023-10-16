import { TbHeartPlus } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";

import loveEmoticon from "../../assets/Emoticon/love.png";
import unicornEmoticon from "../../assets/Emoticon/unicorn.png";
import explodingHeadEmoticon from "../../assets/Emoticon/exploding-head.png";
import raisingHandsEmoticon from "../../assets/Emoticon/raising-hands.png";
import fireEmoticon from "../../assets/Emoticon/fire.png";

const SidebarLeftContent = () => {
  return (
    <div>
      <div className="fixed left-0 right-0 bottom-0 md:sticky md:top-emoticon md:left-0 md:right-0 z-10 bg-white md:bg-transparent rounded-md md:rounded-none shadow-mobile-menu md:shadow-none p-2 md:p-0">
        <div className="flex justify-around items-center md:grid md:gap-y-4">
          <div className="relative group">
            <button type="button" className="flex items-center md:block">
              <div className="group w-10 h-10 flex justify-center items-center p-2">
                <TbHeartPlus className="text-2xl text-base-80 group-hover:text-like" />
              </div>
              <div className="md:mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                <p className="text-base-70 text-sm text-center leading-none">
                  32
                </p>
              </div>
            </button>
            <div className="hidden group-hover:block absolute -top-full md:top-1/2 -translate-y-1/2 md:left-full">
              <div className="min-w-[250px] md:max-w-[360px] p-3 bg-white shadow-emoticon rounded-[32px]">
                <div className="flex items-center gap-x-3">
                  <button
                    type="button"
                    className="block p-2 rounded-[20px] hover:bg-icon"
                  >
                    <div className="w-8 h-8">
                      <img
                        src={loveEmoticon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                      <p className=" text-base-70 text-sm text-center leading-none">
                        32
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="block p-2 rounded-[20px] hover:bg-icon"
                  >
                    <div className="w-8 h-8">
                      <img
                        src={unicornEmoticon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                      <p className=" text-base-70 text-sm text-center leading-none">
                        32
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="block p-2 rounded-[20px] hover:bg-icon"
                  >
                    <div className="w-8 h-8">
                      <img
                        src={explodingHeadEmoticon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                      <p className=" text-base-70 text-sm text-center leading-none">
                        32
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="block p-2 rounded-[20px] hover:bg-icon"
                  >
                    <div className="w-8 h-8">
                      <img
                        src={raisingHandsEmoticon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                      <p className=" text-base-70 text-sm text-center leading-none">
                        32
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="block p-2 rounded-[20px] hover:bg-icon"
                  >
                    <div className="w-8 h-8">
                      <img
                        src={fireEmoticon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                      <p className=" text-base-70 text-sm text-center leading-none">
                        32
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type="button" className="flex items-center md:block">
              <div className="group w-10 h-10 flex justify-center items-center p-2">
                <BiMessageRounded className="text-2xl text-base-80 group-hover:text-comment" />
              </div>
              <div className="md:mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                <p className="text-base-70 text-sm text-center leading-none">
                  32
                </p>
              </div>
            </button>
          </div>
          <div>
            <button type="button" className="flex items-center md:block">
              <div className="group w-10 h-10 flex justify-center items-center p-2">
                <BsBookmark className="text-2xl text-base-80 group-hover:text-bookmark" />
              </div>
              <div className="md:mt-2 min-w-[auto] md:min-w-[1.5rem] ml-1 md:ml-0">
                <p className="text-base-70 text-sm text-center leading-none">
                  32
                </p>
              </div>
            </button>
          </div>
          <div className="relative group">
            <button type="button" className="rounded-full hover:bg-post-name">
              <div className="w-10 h-10 flex justify-center items-center p-2">
                <FaEllipsis className="text-2xl text-base-80" />
              </div>
            </button>
            <div className="hidden group-hover:block absolute bottom-full right-0 md:top-1/2 md:-translate-y-1/2 md:left-full">
              <div className="min-w-[250px] sm:max-w-[360px] p-2 bg-white shadow-emoticon rounded-md">
                <button
                  type="button"
                  className="flex justify-between items-center w-full p-3 rounded-md hover:bg-bg-hover"
                >
                  <p className="text-link text-base font-semibold leading-none">
                    Copy link
                  </p>
                  <div>
                    <RiFileCopy2Fill className="text-link text-2xl" />
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center w-full p-3 rounded-md hover:bg-bg-hover"
                >
                  <p className="text-link text-5sm font-normal leading-none">
                    Share to Twitter
                  </p>
                </button>
                <button
                  type="button"
                  className="flex items-center w-full p-3 rounded-md hover:bg-bg-hover"
                >
                  <p className="text-link text-5sm font-normal leading-none">
                    Share to Linkedin
                  </p>
                </button>
                <button
                  type="button"
                  className="flex items-center w-full p-3 rounded-md hover:bg-bg-hover"
                >
                  <p className="text-link text-5sm font-normal leading-none">
                    Share to Facebook
                  </p>
                </button>
                <button
                  type="button"
                  className="flex items-center w-full p-3 rounded-md hover:bg-bg-hover"
                >
                  <p className="text-link text-5sm font-normal leading-none">
                    Share to Mastodon
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeftContent;
