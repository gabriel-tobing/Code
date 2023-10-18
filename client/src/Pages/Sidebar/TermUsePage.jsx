import { Helmet } from "react-helmet";

import NavbarLayout from "../../components/Layouts/Navbar/NavbarLayout";

const TermUsePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use for CODE Community</title>
      </Helmet>
      <NavbarLayout />
      <div className="absolute top-14 left-0 right-0 bg-main">
        <div className="max-w-[1280px] m-auto p-0 md:p-4 grid grid-cols-1 md:grid-cols-container-2 lg:grid-cols-container-3 gap-x-0 md:gap-x-4">
          <h1>Hello Terms of Use</h1>
        </div>
      </div>
    </>
  );
};

export default TermUsePage;
