import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";

import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";
import user3 from "../../assets/User/user-3.jpg";

import loveEmoticon from "../../assets/Emoticon/love.png";
import unicornEmoticon from "../../assets/Emoticon/unicorn.png";
import explodingHeadEmoticon from "../../assets/Emoticon/exploding-head.png";
import raisingHandsEmoticon from "../../assets/Emoticon/raising-hands.png";
import fireEmoticon from "../../assets/Emoticon/fire.png";

const SearchPostPage = () => {
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
            <div className="p-1 ml-sm">
              <div className="relative group">
                <button
                  type="button"
                  className="p-1 rounded-sm hover:bg-post-name"
                >
                  <h3 className="text-link text-sm font-medium leading-none">
                    Gabriel Juninho Paulista
                  </h3>
                </button>
                <div className="hidden group-hover:block absolute left-0 bottom-full z-30">
                  <div className="min-w-[250px] sm:max-w-[360px] w-max bg-white rounded-md shadow-user-detail">
                    <div className="h-10 bg-[#987094] rounded-t-md"></div>
                    <div className="grid gap-y-4 p-4">
                      <div className="-mt-8">
                        <Link>
                          <button type="button" className="flex">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-2 shrink-0">
                              <img
                                src={user1}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="mt-5 text-link text-4sm sm:text-base font-semibold leading-tight sm:leading-normal">
                              Gabriel Juninho Paulista
                            </p>
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="block w-full bg-branded text-white font-medium py-2 px-4 rounded-md  hover:bg-branded-border"
                        >
                          Follow
                        </button>
                      </div>
                      <div>
                        <p className="text-left text-base-70 text-3sm font-normal">
                          haha, made you look
                        </p>
                      </div>
                      <div>
                        <div>
                          <p className="text-left text-sm font-semibold text-tertier uppercase">
                            Email
                          </p>
                          <p className="text-left">
                            <Link>
                              <span className="text-branded text-2sm font-normal">
                                bethencourt@protonmail.com
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-left text-sm font-semibold text-tertier uppercase">
                            Work
                          </p>
                          <p className="text-left">
                            <span className="text-base-70 text-2sm font-normal">
                              Open to Work
                            </span>
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-left text-sm font-semibold text-tertier uppercase">
                            Location
                          </p>
                          <p className="text-left">
                            <span className="text-base-70 text-2sm font-normal">
                              Trenton, NJ
                            </span>
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-left text-sm font-semibold text-tertier uppercase">
                            Education
                          </p>
                          <p className="text-left">
                            <span className="text-base-70 text-2sm font-normal">
                              B.A. in English from The College of New Jersey
                            </span>
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-left text-sm font-semibold text-tertier uppercase">
                            Joined
                          </p>
                          <p className="text-left">
                            <span className="text-base-70 text-2sm font-normal">
                              June 13, 2019
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-tertier text-xs leading-none px-1">Oct 2</p>
            </div>
          </div>
          <div className="pl-0 md:pl-story-content">
            <Link>
              <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                Hacktoberfest 2023 is Here!
              </h2>
            </Link>
            <div className="flex items-center gap-[1px] flex-wrap mb-2 ml-sm">
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-1 hover:bg-tag-1 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#CC342D]">#</span>ruby
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-2 hover:bg-tag-2 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#4A245D]">#</span>elixir
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-3 hover:bg-tag-3 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#008335]">#</span>beginners
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-4 hover:bg-tag-4 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#890606]">#</span>programming
                </button>
              </Link>
            </div>
            <div className="flex justify-between items-center leading-tight">
              <div className="flex items-center ml-link">
                <Link>
                  <button
                    type="button"
                    className="pl-icon p-detail rounded-md hover:bg-detail"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={loveEmoticon}
                            alt=""
                            className="block w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={unicornEmoticon}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={explodingHeadEmoticon}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={raisingHandsEmoticon}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={fireEmoticon}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="ml-[1em]">
                        <p className="text-base-80 text-3xs font-normal hover:text-base-100 leading-none whitespace-nowrap">
                          <span className="text-5xs">158</span>{" "}
                          <span className="hidden sm:inline-block">
                            reactions
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
                <Link>
                  <button
                    type="button"
                    className="pl-icon p-detail rounded-md hover:bg-detail"
                  >
                    <div className="flex items-center">
                      <div className="w-7 h-7 flex justify-center items-center">
                        <BiMessageRounded className="text-base" />
                      </div>
                      <div className="ml-1">
                        <p className="text-base-80 text-3xs font-normal hover:text-base-100 leading-none whitespace-nowrap">
                          <span className="text-5xs">4</span>{" "}
                          <span className="hidden sm:inline-block">
                            comments
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="flex items-center">
                <p className="text-tertier text-xs font-normal mr-2 leading-none">
                  7 min read
                </p>
                <button
                  type="button"
                  className="block sm:p-2 lg:p-3 rounded-md hover:bg-bg-hover"
                >
                  <BsBookmark className="text-button" />
                </button>
              </div>
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
              <h3 className="text-link text-sm font-medium leading-none py-1">
                Taqui
              </h3>
              <p className="text-tertier text-xs leading-none">Oct 2</p>
            </div>
          </div>
          <div className="pl-0 md:pl-story-content">
            <Link to="/post-detail">
              <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                This Is Weirdest JavaScript Operator
              </h2>
            </Link>
            <div className="flex items-center gap-[1px] flex-wrap mb-2 ml-sm">
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-1 hover:bg-tag-1 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#CC342D]">#</span>ruby
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-2 hover:bg-tag-2 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#4A245D]">#</span>elixir
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-3 hover:bg-tag-3 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#008335]">#</span>beginners
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-4 hover:bg-tag-4 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#890606]">#</span>programming
                </button>
              </Link>
            </div>
            <div className="flex justify-between items-center leading-tight">
              <div className="flex items-center ml-link">
                <Link>
                  <button
                    type="button"
                    className="pl-icon p-detail rounded-md hover:bg-detail"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={loveEmoticon}
                            alt=""
                            className="block w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={unicornEmoticon}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={explodingHeadEmoticon}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="ml-[1em]">
                        <p className="text-base-80 text-3xs font-normal hover:text-base-100 leading-none whitespace-nowrap">
                          <span className="text-5xs">158</span>{" "}
                          <span className="hidden sm:inline-block">
                            reactions
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
                <Link>
                  <button
                    type="button"
                    className="pl-icon p-detail rounded-md hover:bg-detail"
                  >
                    <div className="flex items-center">
                      <div className="w-7 h-7 flex justify-center items-center">
                        <BiMessageRounded className="text-base" />
                      </div>
                      <div className="ml-1">
                        <p className="text-base-80 text-3xs font-normal hover:text-base-100 leading-none whitespace-nowrap">
                          <span className="text-5xs">4</span>{" "}
                          <span className="hidden sm:inline-block">
                            comments
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="flex items-center">
                <p className="text-tertier text-xs font-normal mr-2 leading-none">
                  7 min read
                </p>
                <button
                  type="button"
                  className="block sm:p-2 lg:p-3 rounded-md hover:bg-bg-hover"
                >
                  <BsBookmark className="text-button" />
                </button>
              </div>
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
              <h3 className="text-link text-sm font-medium leading-none py-1">
                Cherry Ramatis
              </h3>
              <p className="text-tertier text-xs leading-none">Oct 2</p>
            </div>
          </div>
          <div className="pl-0 md:pl-story-content">
            <Link to="/post-detail">
              <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                Pattern matching - Dealing with the if statement nightmare
              </h2>
            </Link>
            <div className="flex items-center gap-[1px] flex-wrap mb-2 ml-sm">
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-1 hover:bg-tag-1 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#CC342D]">#</span>ruby
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-2 hover:bg-tag-2 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#4A245D]">#</span>elixir
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-3 hover:bg-tag-3 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#008335]">#</span>beginners
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  className="p-tag rounded-md hover:shadow-tag-4 hover:bg-tag-4 text-3xs text-base-80 font-normal hover:text-body"
                >
                  <span className="text-[#890606]">#</span>programming
                </button>
              </Link>
            </div>
            <div className="flex justify-between items-center leading-tight">
              <div className="flex items-center ml-link">
                <Link>
                  <button
                    type="button"
                    className="pl-icon p-detail rounded-md hover:bg-detail"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white mr-[-0.75em] bg-icon">
                          <img
                            src={loveEmoticon}
                            alt=""
                            className="block w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="ml-[1em]">
                        <p className="text-base-80 text-3xs font-normal hover:text-base-100 leading-none whitespace-nowrap">
                          <span className="text-5xs">119</span>{" "}
                          <span className="hidden sm:inline-block">
                            reactions
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
                <Link>
                  <button
                    type="button"
                    className="pl-icon p-detail rounded-md hover:bg-detail"
                  >
                    <div className="flex items-center">
                      <div className="w-7 h-7 flex justify-center items-center">
                        <BiMessageRounded className="text-base" />
                      </div>
                      <div className="ml-1">
                        <p className="text-base-80 text-3xs font-normal hover:text-base-100 leading-none whitespace-nowrap">
                          <span className="text-5xs">2</span>{" "}
                          <span className="hidden sm:inline-block">
                            comments
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="flex items-center">
                <p className="text-tertier text-xs font-normal mr-2 leading-none">
                  7 min read
                </p>
                <button
                  type="button"
                  className="block sm:p-2 lg:p-3 rounded-md hover:bg-bg-hover"
                >
                  <BsBookmark className="text-button" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPostPage;
