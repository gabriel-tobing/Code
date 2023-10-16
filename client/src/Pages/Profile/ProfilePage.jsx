import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaEllipsis } from "react-icons/fa6";
import { RiCake2Fill } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

import loveEmoticon from "../../assets/Emoticon/love.png";
import unicornEmoticon from "../../assets/Emoticon/unicorn.png";
import explodingHeadEmoticon from "../../assets/Emoticon/exploding-head.png";

import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";
import user3 from "../../assets/User/user-3.jpg";

import badge1 from "../../assets/Badge/registered.png";

// Untuk paragraf bagian recent comment buat length harus 61 karakter
// Untuk div parent post akan menambah margin-top saat div badge show

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Gabriel Juninho Paulista - CODE Community</title>
      </Helmet>
      <NavbarLayout />
      <div className="absolute top-14 left-0 right-0 bg-main">
        <div className="bg-profile">
          <div className="max-w-[1024px] pt-16 mx-auto md:px-4">
            <div className="bg-white rounded-auto mb-4 shadow-card">
              <div className="mb-4 px-6">
                <div className="relative -top-[3rem] flex md:justify-center items-center">
                  <div className="bg-black p-1 rounded-full">
                    <div className="w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden ">
                      <img
                        src={user1}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
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
              <div className="pt-0 md:pt-6 p-6">
                <div className="flex justify-start md:justify-center items-center">
                  <h2 className="min-h-[40px] leading-tight sm:leading-normal text-xl sm:text-2xl text-base-100 font-semibold">
                    Gabriel Juninho Paulista
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[75%] mb-4 text-5sm md:text-base text-base-90 mx-auto text-left md:text-center">
                  404 not found
                </p>
                <div className="flex justify-start md:justify-center items-center p-1 md:py-1 md:px-3">
                  <RiCake2Fill className="text-link-secondary text-2xl mr-2" />
                  <span className="text-link-secondary text-sm">
                    Joined on <span>Jan 31, 2023</span>
                  </span>
                </div>
              </div>

              <div className="p-profile-info border-t border-base-10">
                <div className="flex flex-col sm:flex-row justify-evenly">
                  <div className="p-user-detail">
                    <strong>
                      <p className="text-[85%] text-link-secondary font-medium text-left md:text-center">
                        Work
                      </p>
                    </strong>
                    <p className="text-3sm text-body">
                      Senior Software Engineer at ArtStation
                    </p>
                  </div>
                </div>
                <div className="block w-full md:hidden pt-3">
                  <Link>
                    <button
                      type="button"
                      className="p-outline-2 rounded-md border-2 border-outline hover:border-outline-hover flex justify-center items-center w-full text-4sm font-medium text-base-80 hover:text-base-100"
                    >
                      More info about @tobingz17
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-profile-info lg:grid-cols-container-2 md:gap-x-4 pt-4 md:pt-0">
              <div className="hidden md:grid md:gap-y-4 h-max">
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
                    <div className="pl-0 md:pl-story-content">
                      <Link to="/post-detail">
                        <h2 className="text-body text-[1.15rem] md:text-[1.35rem] font-semibold leading-tight hover:text-branded mb-1">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-auto shadow-card">
                  <div className="py-3 px-4 border-b border-icon">
                    <h3 className="text-2lg sm:text-3lg text-base-90 font-semibold leading-tight sm:leading-normal text-left">
                      Recent Comments
                    </h3>
                  </div>
                  <div>
                    <Link>
                      <button
                        type="button"
                        className="block w-full p-4 border-b border-icon hover:bg-card-hover"
                      >
                        <h4 className="text-link text-4sm font-bold leading-tight sm:leading-normal text-left mb-1">
                          What your favorite operating system?
                        </h4>
                        <div className="flex items-center">
                          <p className="text-base-80 text-4xs text-left leading-none max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap">
                            I'm an Avid Ubuntu user myself but that's mostly
                            because it's my very very favorite
                          </p>
                          <span className="text-link-secondary text-4xs pl-1">
                            Oct 15
                          </span>
                        </div>
                      </button>
                    </Link>
                  </div>
                  <div className="py-3 px-4">
                    <Link>
                      <button
                        type="button"
                        className="block text-branded text-4sm"
                      >
                        View all 14 comments
                      </button>
                    </Link>
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
