import { Link } from "react-router-dom";
import { BsImage, BsArrowsCollapse } from "react-icons/bs";
import { BiMessageRounded, BiBookBookmark } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import { RiHeading, RiDoubleQuotesL, RiHeart2Line } from "react-icons/ri";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineThunderbolt,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { GoCodeSquare } from "react-icons/go";
import { LuChevronsUpDown, LuChevronsDownUp } from "react-icons/lu";

import loveEmoticon from "../../assets/Emoticon/love.png";
import fireEmoticon from "../../assets/Emoticon/fire.png";

import post1 from "../../assets/Post/post-1.jpg";

import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";

const MainContent = () => {
  return (
    <div className="rounded-auto bg-white overflow-hidden shadow-card">
      <div className="max-h-post-detail">
        <Link>
          <img src={post1} alt="" className="w-full h-full object-contain" />
        </Link>
      </div>
      <div className="p-post-detail-xs sm:p-post-detail-sm md:p-post-detail-md lg:p-post-detail-lg">
        <div className="flex items-center mb-5">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={user1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 flex-1">
            <Link>
              <p className="text-link text-4sm font-semibold hover:text-branded">
                Gabriel Juninho Paulista
              </p>
            </Link>
            <p className="text-xs text-link-secondary font-normal">
              Posted on Oct 5
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[2.2em] py-2 min-h-[40px]">
          <div className="flex items-center gap-x-[0.3em]">
            <div className="w-6 h-6">
              <img
                src={loveEmoticon}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base-70 text-5sm text-center leading-none">
              32
            </span>
          </div>
          <div className="flex items-center gap-x-[0.3em]">
            <div className="w-6 h-6">
              <img
                src={fireEmoticon}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base-70 text-5sm text-center leading-none">
              32
            </span>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
          I hate Typescript, is it a shame?
        </h2>
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
        <div className="py-4">
          <div>
            <p className="text-body text-[1rem] font-normal mb-5 leading-normal md:leading-relaxed">
              But am I alone in this boat, gently rowing down the river of
              resistance against the *TypeScript * tide? Or are there others who
              share this sentiment 😍? Or better yet, are there knights in
              shining armor ready to defend TypeScript's honor and educate the
              peasants like me on the path of righteous coding 🤣🤣?
            </p>
            <p className="text-body text-[1.05rem] font-normal mb-5 leading-normal md:leading-relaxed">
              <strong>I love Javascript but Hate Typescript!</strong>
            </p>
            <h2 className="text-[1.2em] font-bold leading-tight my-title">
              Here are some discussion nuggets to chew on:
            </h2>
            <ul className="pl-5 list-disc text-body text-[1rem] font-normal">
              <li>
                Why is TypeScript hailed as the savior of big projects? Is it
                really the unsung hero in the sprawling chaos of JavaScript?
              </li>
              <li>
                For the TypeScript fans, share your “Aha!” moment when
                TypeScript clicked for you 😎.
              </li>
              <li>
                And for my fellow “TypeScript skeptics”, why do you really hate
                it?
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-base-10 py-3 px-3 md:px-5 lg:py-8 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h2 className="text-base sm:text-4lg leading-tight sm:leading-normal text-base-90 font-bold">
              Top comments <span>(140)</span>
            </h2>
            <button
              type="button"
              className="block p-4 rounded-md hover:bg-bg-hover"
            >
              <LuChevronsUpDown className="text-button text-lg" />
            </button>
          </div>
          <button
            type="button"
            className="block p-outline-2 rounded-md border-2 border-outline hover:border-outline-hover text-5sm font-medium text-base-80 leading-[1.5rem] shadow-[0_1px_3px_rgba(0, 0, 0, 0.05)]"
          >
            Subscribe
          </button>
        </div>
        <div className="mb-8">
          <form>
            <div className="flex">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden shrink-0 mr-2">
                <img
                  src={user1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-auto min-w-0 border border-form rounded-md">
                <textarea
                  placeholder="Add to the discussion"
                  className="block w-full rounded-md text-body text-4sm font-normal whitespace-pre-wrap outline-none p-[0.5em] resize-y h-[128px] max-h-[40vh] placeholder:text-body placeholder:text-4sm placeholder:font-normal"
                ></textarea>
                <div className="border-t border-form">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <AiOutlineBold className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <AiOutlineItalic className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <AiOutlineLink className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <AiOutlineOrderedList className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <AiOutlineUnorderedList className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group hidden md:block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <RiHeading className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group hidden md:block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <RiDoubleQuotesL className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group hidden md:block lg:hidden xl:block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <FiCode className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group hidden md:block lg:hidden xl:block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <GoCodeSquare className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group hidden md:block lg:hidden xl:block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <AiOutlineThunderbolt className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <button
                        type="button"
                        className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                      >
                        <BsImage className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                    </div>
                    <div className="relative group">
                      <button
                        type="button"
                        className=" block p-2 rounded-md hover:bg-bg-hover"
                      >
                        <HiOutlineEllipsisVertical className="text-button text-2lg md:text-[1.3rem] lg:text-2xl group-hover:text-branded-border" />
                      </button>
                      <div className="hidden group-hover:block absolute bottom-full right-0 top-full md:-translate-y-1/2 z-10">
                        <div className="sm:max-w-[360px] md:w-full p-2 bg-white shadow-emoticon rounded-md">
                          <div className="grid grid-flow-col grid-rows-2 md:flex md:items-center">
                            <button
                              type="button"
                              className="group block md:hidden p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <RiHeading className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block md:hidden p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <RiDoubleQuotesL className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block md:hidden lg:block xl:hidden p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <FiCode className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block md:hidden lg:block xl:hidden p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <GoCodeSquare className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block md:hidden lg:block xl:hidden p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <AiOutlineThunderbolt className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <AiOutlineUnderline className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <AiOutlineStrikethrough className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <BsArrowsCollapse className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block p-2 rounded-md hover:bg-bg-hover mr-1"
                            >
                              <BiBookBookmark className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                            <button
                              type="button"
                              className="group block p-2 rounded-md hover:bg-bg-hover"
                            >
                              <AiOutlineQuestionCircle className="text-button text-2lg md:text-[1.3rem] lg:text-2xl" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center pl-10 mt-4">
              <button
                type="button"
                className="block p-sm mr-2 bg-branded hover:bg-branded-border rounded-md opacity-60 cursor-not-allowed text-3sm font-medium text-[#F9F9F9] shadow-[0_1px_3px_rgba(0, 0, 0, 0.05)]"
              >
                Submit
              </button>
              <button
                type="button"
                className="block p-sm mr-2 bg-outline hover:bg-[#BDBDBD] rounded-md opacity-60 cursor-not-allowed text-3sm font-medium text-base-80 hover:text-base-100 shadow-[0_1px_3px_rgba(0, 0, 0, 0.05)]"
              >
                Preview
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex mb-6">
            <div className="flex flex-col items-center">
              <Link>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden shrink-0 mt-4 md:mt-3">
                  <img
                    src={user1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <button type="button" className="block mt-4 p-2 rounded-md">
                <LuChevronsDownUp />
              </button>
            </div>
            <div className="pl-2 min-w-0 flex-auto">
              <div className="rounded-auto p-1 border border-[rgba(23, 23, 23, 0.05)]">
                <div className="flex justify-between items-center pt-2 px-3">
                  <div className="flex items-center">
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
                          <div className="border-t-[2rem] border-[#987094] rounded-t-md"></div>
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
                    <span className="inline-block text-[#BDBDBD] pr-2">•</span>
                    <span className="text-link-secondary text-sm">Oct 4</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="block p-2 hover:bg-bg-hover rounded-md"
                    >
                      <FaEllipsis />
                    </button>
                  </div>
                </div>
                <div className="px-4 mt-2">
                  <p className="text-body text-5sm font-normal mb-5 leading-normal">
                    No, you're not the only that hates it. Many also do. It's
                    been the "trendy" thing for a long while and people prefer
                    it because "it has better tooling".
                  </p>
                  <p className="text-body text-5sm font-normal mb-5 leading-normal">
                    But wait and see, the TS era is coming to an end. When some
                    proposals for JS make it to the official spec, TS will be
                    just a memory.
                  </p>
                  <p className="text-body text-5sm font-normal leading-normal">
                    And we will be able to go back to develop for the web using
                    the original holy trio of web dev.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="flex items-center mr-1 p-detail rounded-md hover:bg-post-name"
                >
                  <RiHeart2Line className="text-body text-xl mr-1" />
                  <div>
                    <span className="text-base-70 text-sm leading-none">
                      2 <span>Likes</span>
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center mr-1 p-detail rounded-md hover:bg-post-name"
                >
                  <BiMessageRounded className="text-body text-xl mr-1" />
                  <span className="text-base-70 text-sm leading-none">
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex mb-6 pl-4 md:pl-7">
            <div className="flex flex-col items-center">
              <Link>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden shrink-0 mt-4 md:mt-3">
                  <img
                    src={user2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <button type="button" className="block mt-4 p-2 rounded-md">
                <LuChevronsDownUp />
              </button>
            </div>
            <div className="pl-2 min-w-0 flex-auto">
              <div className="rounded-auto p-1 border border-[rgba(23, 23, 23, 0.05)]">
                <div className="flex justify-between items-center pt-2 px-3">
                  <div className="flex items-center">
                    <div className="relative group">
                      <button
                        type="button"
                        className="p-1 rounded-sm hover:bg-post-name"
                      >
                        <h3 className="text-link text-sm font-medium leading-none">
                          Taqui
                        </h3>
                      </button>
                      <div className="hidden group-hover:block absolute left-0 bottom-full z-30">
                        <div className="min-w-[250px] sm:max-w-[360px] w-max bg-white rounded-md shadow-user-detail">
                          <div className="border-t-[2rem] border-[#987094] rounded-t-md"></div>
                          <div className="grid gap-y-4 p-4">
                            <div className="-mt-8">
                              <Link>
                                <button type="button" className="flex">
                                  <div className="w-12 h-12 rounded-full overflow-hidden mr-2 shrink-0">
                                    <img
                                      src={user2}
                                      alt=""
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <p className="mt-5 text-link text-4sm sm:text-base font-semibold leading-tight sm:leading-normal">
                                    Taqui
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
                    <span className="inline-block text-[#BDBDBD] pr-2">•</span>
                    <span className="text-link-secondary text-sm">Oct 4</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="block p-2 hover:bg-bg-hover rounded-md"
                    >
                      <FaEllipsis />
                    </button>
                  </div>
                </div>
                <div className="px-4 mt-2">
                  <p className="text-body text-5sm font-normal mb-5 leading-normal">
                    No, you're not the only that hates it. Many also do. It's
                    been the "trendy" thing for a long while and people prefer
                    it because "it has better tooling".
                  </p>
                  <p className="text-body text-5sm font-normal mb-5 leading-normal">
                    But wait and see, the TS era is coming to an end. When some
                    proposals for JS make it to the official spec, TS will be
                    just a memory.
                  </p>
                  <p className="text-body text-5sm font-normal leading-normal">
                    And we will be able to go back to develop for the web using
                    the original holy trio of web dev.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="flex items-center mr-1 p-detail rounded-md hover:bg-post-name"
                >
                  <RiHeart2Line className="text-body text-xl mr-1" />
                  <div>
                    <span className="text-base-70 text-sm leading-none">
                      2 <span>Likes</span>
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center mr-1 p-detail rounded-md hover:bg-post-name"
                >
                  <BiMessageRounded className="text-body text-xl mr-1" />
                  <span className="text-base-70 text-sm leading-none">
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link>
            <button
              type="button"
              className="block text-link-secondary text-5xs font-normal"
            >
              Code of cunduct
            </button>
          </Link>
          <span className="inline-block px-2 opacity-25">•</span>
          <Link>
            <button
              type="button"
              className="block text-link-secondary text-5xs font-normal"
            >
              Report abuse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
