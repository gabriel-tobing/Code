import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { TbHeartPlus } from "react-icons/tb";
import { BsBookmark, BsImage } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";
import {
  RiFileCopy2Fill,
  RiHeading,
  RiDoubleQuotesL,
  RiHeart2Line,
} from "react-icons/ri";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { GoCodeSquare } from "react-icons/go";
import { LuChevronsUpDown, LuChevronsDownUp } from "react-icons/lu";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

import loveEmoticon from "../../assets/Emoticon/love.png";
import unicornEmoticon from "../../assets/Emoticon/unicorn.png";
import explodingHeadEmoticon from "../../assets/Emoticon/exploding-head.png";
import raisingHandsEmoticon from "../../assets/Emoticon/raising-hands.png";
import fireEmoticon from "../../assets/Emoticon/fire.png";

import post1 from "../../assets/Post/post-1.jpg";

import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";

import SidebarLeftContent from "./SidebarLeftContent";
import MainContent from "./MainContent";
import SidebarRightContent from "./SidebarRightContent";

const PostDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>This Is Weirdest JavaScript Operator</title>
      </Helmet>
      <NavbarLayout />
      <div className="absolute top-14 left-0 right-0 bg-main">
        <div className="max-w-[1280px] m-auto p-0 md:p-4 pb-14 sm:pb-0 grid grid-cols-1 md:grid-cols-detail-2 lg:grid-cols-detail-3 gap-x-0 md:gap-x-4">
          <SidebarLeftContent />
          <MainContent />
          <SidebarRightContent />
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
