import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaEllipsis } from "react-icons/fa6";
import { RiCake2Fill } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

import loveEmoticon from "../../assets/Emoticon/love.png";
import unicornEmoticon from "../../assets/Emoticon/unicorn.png";
import explodingHeadEmoticon from "../../assets/Emoticon/exploding-head.png";
import raisingHandsEmoticon from "../../assets/Emoticon/raising-hands.png";
import fireEmoticon from "../../assets/Emoticon/fire.png";

import post1 from "../../assets/Post/post-1.jpg";

import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";
import user3 from "../../assets/User/user-3.jpg";

import badge1 from "../../assets/Badge/registered.png";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Gabriel Juninho Paulista - CODE Community</title>
      </Helmet>
      <NavbarLayout />
      <div className="absolute top-14 left-0 right-0 bg-main">
        <div className="bg-profile">
          <div className="max-w-[1024px] pt-8 md:pt-16 mx-auto">
            <div className="bg-white rounded-auto mb-4 shadow-card">
              <div className="mb-4 px-6">
                <div className="relative -top-[3rem] flex justify-center items-center">
                  <div className="w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <img
                      src={user1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center -mt-12">
                  <button
                    type="button"
                    className="p-sm rounded-md text-5sm text-[#F9F9F9] font-medium bg-branded hover:bg-branded-border"
                  >
                    Follow
                  </button>
                  <div className="ml-2">
                    <button
                      type="button"
                      className="p-2 rounded-md hover:bg-post-name"
                    >
                      <FaEllipsis className="text-2xl text-base-80" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-center">
                  <h2 className="min-h-[40px] leading-tight sm:leading-normal text-xl sm:text-2xl text-base-100 font-semibold">
                    Gabriel Juninho Paulista
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[75%] mb-4 text-5sm md:text-base text-base-90 mx-auto text-center">
                  404 bio not found
                </p>
                <div className="flex justify-center items-center py-1 px-3">
                  <RiCake2Fill className="text-link-secondary text-2xl mr-2" />
                  <span className="text-link-secondary text-sm">
                    Joined on <span>Jan 31, 2023</span>
                  </span>
                </div>
              </div>
              <div className="hidden md:block p-profile-info border-t border-base-10">
                <div className="flex flex-col sm:flex-row justify-evenly">
                  <div className="p-profile-info">
                    <strong>
                      <p className="text-[85%] text-link-secondary font-medium text-center">
                        Work
                      </p>
                    </strong>
                    <p className="text-3sm text-body">
                      Senior Software Engineer at ArtStation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-profile-info lg:grid-cols-container-2 md:gap-x-4">
              <div className="hidden md:grid gap-y-4 h-max">
                <div className="bg-white shadow-card rounded-auto">
                  <div className="py-3 px-4 border-b border-icon">
                    <h3 className="leading-tight sm:leading-normal text-5sm text-base-90 font-bold">
                      Badge
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="grid sm:grid-cols-4 md:grid-cols-2 gap-x-4">
                      <button type="button">
                        <img
                          src={badge1}
                          alt=""
                          className="block mx-auto max-w-[75%] w-full aspect-square h-auto rotate-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-card rounded-auto">
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <IoNewspaperOutline className="mr-3 text-[#8A8A8A] text-2xl" />
                      <span className="text-2sm text-base-80 leading-none">
                        9 posts published
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <BiMessageRounded className="mr-3 text-[#8A8A8A] text-2xl" />
                      <span className="text-2sm text-base-80 leading-none">
                        0 comments written
                      </span>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineHashtag className="mr-3 text-[#8A8A8A] text-2xl" />
                      <span className="text-2sm text-base-80 leading-none">
                        0 tags followed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-auto mb-2 shadow-card">
                  <div className="rounded-t-md overflow-hidden aspect-image-post object-contain">
                    <img src={post1} alt="" className="w-full h-full " />
                  </div>
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
                                        B.A. in English from The College of New
                                        Jersey
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
                        <p className="text-tertier text-xs leading-none px-1">
                          Oct 2
                        </p>
                      </div>
                    </div>
                    <div className="pl-story-content">
                      <Link>
                        <h2 className="text-body text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
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
                                    reactions
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
                                    <span className="text-5xs">4</span> comments
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
                        <p className="text-tertier text-xs leading-none">
                          Oct 2
                        </p>
                      </div>
                    </div>
                    <div className="pl-story-content">
                      <Link to="/post-detail">
                        <h2 className="text-body text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
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
                                    reactions
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
                                    <span className="text-5xs">4</span> comments
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
                        <p className="text-tertier text-xs leading-none">
                          Oct 2
                        </p>
                      </div>
                    </div>
                    <div className="pl-story-content">
                      <Link to="/post-detail">
                        <h2 className="text-body text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
                          Pattern matching - Dealing with the if statement
                          nightmare
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
                                    reactions
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
                                    <span className="text-5xs">2</span> comments
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
