import { Helmet } from "react-helmet";

import SidebarLeftContent from "./SidebarLeftContent";
import MainContent from "./MainContent";
import SidebarRightContent from "./SidebarRightContent";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CODE Community</title>
      </Helmet>
      <NavbarLayout />
      <div className="absolute top-14 left-0 right-0 bg-main">
        <div className="max-w-[1280px] m-auto p-4 grid grid-cols-1 md:grid-cols-container-2 lg:grid-cols-container-3 gap-x-0 md:gap-x-4">
          <SidebarLeftContent />
          <MainContent />
          <SidebarRightContent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
