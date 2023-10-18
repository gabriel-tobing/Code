import { Link } from "react-router-dom";

import user1 from "../../assets/User/user-1.jpg";

const SidebarRightContent = () => {
  return (
    <div>
      <div className="grid gap-y-4">
        <div className="bg-white rounded-auto overflow-hidden shadow-card">
          <div className="border-t-[2rem] border-[#987094] rounded-t-auto"></div>
          <div className="grid gap-y-4 p-4">
            <div className="flex -mt-8">
              <Link>
                <button type="button" className="block">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-2 shrink-0">
                    <img
                      src={user1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              </Link>
              <Link to="/profile">
                <p className="mt-5 text-link text-4sm sm:text-base font-semibold leading-tight sm:leading-normal hover:text-branded-border">
                  Gabriel Juninho Paulista
                </p>
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
                I am a Passionate Frontend Web Developer, I design webpages and
                graphics uniquely and creatively. I also design the webpage
                layout in a way that is pleasing to the eye and easy on the
                eyes.
              </p>
            </div>
            <div>
              <div className="mt-3">
                <p className="text-left text-4xs font-semibold text-tertier uppercase">
                  Location
                </p>
                <p className="text-left">
                  <span className="text-base-70 text-2sm font-normal">
                    Trenton, NJ
                  </span>
                </p>
              </div>
              <div className="mt-3">
                <p className="text-left text-4xs font-semibold text-tertier uppercase">
                  Education
                </p>
                <p className="text-left">
                  <span className="text-base-70 text-2sm font-normal">
                    B.A. in English from The College of New Jersey
                  </span>
                </p>
              </div>
              <div className="mt-3">
                <p className="text-left text-4xs font-semibold text-tertier uppercase">
                  Work
                </p>
                <p className="text-left">
                  <span className="text-base-70 text-2sm font-normal">
                    Open to Work
                  </span>
                </p>
              </div>

              <div className="mt-3">
                <p className="text-left text-4xs font-semibold text-tertier uppercase">
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
        <div className="bg-white rounded-auto shadow-card">
          <div className="py-3 px-4 border-b border-icon">
            <h3 className="text-2lg sm:text-3lg text-base-90 font-semibold leading-tight text-left">
              More from{" "}
              <Link to="/profile">
                <span className="text-branded">Gabriel Juninho Paulista</span>
              </Link>
            </h3>
          </div>
          <div>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Men's Fashion Web UI Design
                </p>
                <div className="flex items-center pt-1">
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>webdev</span>
                  </div>
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>design</span>
                  </div>
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>ux</span>
                  </div>
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>web3</span>
                  </div>
                </div>
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Single Page Web Design
                </p>
                <div className="flex items-center pt-1">
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>webdev</span>
                  </div>
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>design</span>
                  </div>
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>ux</span>
                  </div>
                  <div className="mr-[0.3rem] text-left text-link-secondary text-4xs">
                    <span className="opacity-50">#</span>
                    <span>web3</span>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRightContent;
