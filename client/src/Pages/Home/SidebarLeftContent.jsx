import { Link } from "react-router-dom";
import { BsTwitter, BsGithub, BsMastodon } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { FiTwitch } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";

import Home from "../../assets/Sidebar/home.png";
import Podcasts from "../../assets/Sidebar/podcast.png";
import Videos from "../../assets/Sidebar/camera-video.png";
import Tags from "../../assets/Sidebar/tag.png";
import Faq from "../../assets/Sidebar/bulb.png";
import Advertise from "../../assets/Sidebar/love.png";
import Contact from "../../assets/Sidebar/trumpet.png";
import Guides from "../../assets/Sidebar/literature.png";
import Software from "../../assets/Sidebar/thinking-face.png";
import Code from "../../assets/Sidebar/thumb.png";
import Policy from "../../assets/Sidebar/policy.png";
import Terms from "../../assets/Sidebar/assignment.png";

const SidebarLeftContent = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-white p-4 shadow-card rounded-auto">
        <h2 className="leading-tight mb-4 text-lg text-base-90 font-semibold">
          CODE Community is a community of <span>1,154,656</span> amazing
          developers
        </h2>
        <p className="text-base-70 text-4sm font-normal mb-4">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="flex flex-col gap-y-1">
          <Link>
            <button
              type="button"
              className="block w-full py-2 px-4 bg-transparent rounded-[0.375rem] border border-branded p-border-1 text-branded text-3sm font-medium hover:bg-branded hover:border-link-hover hover:text-white hover:underline"
            >
              Create account
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="block w-full py-2 px-4 bg-transparent rounded-[0.375rem] text-link text-3sm font-normal hover:bg-bg-hover hover:text-link-hover hover:underline"
            >
              Log in
            </button>
          </Link>
        </div>
      </div>
      <div className="my-4">
        <div className="flex flex-col">
          <Link to="/">
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img src={Home} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Home
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Podcasts}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Podcasts
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Videos}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Videos
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img src={Tags} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Tags
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img src={Faq} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                FAQ
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Advertise}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Advertise on CODE
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                About
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Contact}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Contact
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Guides}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Guides
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Software}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Software comparisons
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="py-2 pl-3 text-base-90 text-5sm font-semibold leading-normal">
          Other
        </h2>
        <div className="flex flex-col">
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img src={Code} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Code of Coduct
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Policy}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Privacy Policy
              </span>
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="group flex items-center w-full py-2 px-4 hover:bg-bg-hover rounded-md"
            >
              <div className="w-6 h-6 mr-2 ml-link">
                <img
                  src={Terms}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="group-hover:text-branded-border group-hover:underline text-link text-3sm font-normal">
                Terms of use
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Link>
          <button
            type="button"
            className="group rounded-md p-2 hover:bg-bg-hover"
          >
            <BsTwitter className="text-slate-900 text-xl group-hover:text-link-hover" />
          </button>
        </Link>
        <Link>
          <button
            type="button"
            className="group rounded-md p-2 hover:bg-bg-hover"
          >
            <AiFillFacebook className="text-slate-900 text-xl group-hover:text-link-hover" />
          </button>
        </Link>
        <Link>
          <button
            type="button"
            className="group rounded-md p-2 hover:bg-bg-hover"
          >
            <BsGithub className="text-slate-900 text-xl group-hover:text-link-hover" />
          </button>
        </Link>
        <Link>
          <button
            type="button"
            className="group rounded-md p-2 hover:bg-bg-hover"
          >
            <BiLogoInstagram className="text-slate-900 text-2xl group-hover:text-link-hover" />
          </button>
        </Link>
        <Link>
          <button
            type="button"
            className="group rounded-md p-2 hover:bg-bg-hover"
          >
            <FiTwitch className="text-slate-900 text-xl group-hover:text-link-hover" />
          </button>
        </Link>
        <Link>
          <button
            type="button"
            className="group rounded-md p-2 hover:bg-bg-hover"
          >
            <BsMastodon className="text-slate-900 text-xl group-hover:text-link-hover" />
          </button>
        </Link>
      </div>
      <div className="mb-6">
        <h3 className="text-base-90 text-5sm font-semibold p-2 leading-normal">
          Popular Tags
        </h3>
        <div className="max-h-[42vh] overflow-y-auto">
          <div className="flex flex-col">
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #webdev
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #javascript
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #beginners
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #programming
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #tutorial
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #react
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #python
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #discuss
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #devops
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="flex w-full py-2 px-4 rounded-md hover:bg-bg-hover hover:text-link-hover hover:underline text-link text-3sm font-normal"
              >
                #ai
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-secondary text-4xs font-normal">
          <Link>
            <span className="text-branded font-medium hover:text-branded-border hover:underline">
              CODE Community
            </span>
          </Link>{" "}
          A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>

        <p className="mt-4 text-secondary text-4xs font-normal">
          CODE Community © 2023 - now.
        </p>
      </div>
    </div>
  );
};

export default SidebarLeftContent;
