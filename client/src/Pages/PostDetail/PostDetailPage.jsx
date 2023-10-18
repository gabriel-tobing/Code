import { Helmet } from "react-helmet";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

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
