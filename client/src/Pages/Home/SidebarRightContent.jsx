import { Link } from "react-router-dom";

const SidebarRightContent = () => {
  return (
    <div className="hidden lg:block">
      <div className="grid gap-y-4">
        <div className="bg-white rounded-auto shadow-card">
          <div className="py-3 px-4 border-b border-icon">
            <h3 className="text-2lg sm:text-3lg text-base-90 font-semibold leading-tight sm:leading-normal text-left">
              #discuss
            </h3>
          </div>
          <div>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Explain API Like I'm Five
                </p>
                <div>
                  <p className="text-link-secondary text-4xs pt-1 text-left">
                    <span>3</span> comments
                  </p>
                </div>
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Meme Monday
                </p>
                <div>
                  <p className="text-link-secondary text-4xs pt-1 text-left">
                    <span>3</span> comments
                  </p>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-auto shadow-card">
          <div className="py-3 px-4 border-b border-icon">
            <h3 className="text-2lg sm:text-3lg text-base-90 font-semibold leading-tight sm:leading-normal text-left">
              #hacktoberfest23
            </h3>
          </div>
          <div>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Embarking On My Hacktoberfest Journey as a Unity Game Repo
                  Maintainer 🎃 🎮
                </p>
                <div>
                  <p className="text-link-secondary text-4xs pt-1 text-left">
                    <span>3</span> comments
                  </p>
                </div>
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Hacktoberfest 2023: Celebrating Open Source Collaboration and
                  Innovation
                </p>
                <div>
                  <p className="text-link-secondary text-4xs pt-1 text-left">
                    <span>3</span> comments
                  </p>
                </div>
              </button>
            </Link>
            <Link>
              <button
                type="button"
                className="group block w-full p-4 border-b border-icon"
              >
                <p className="text-link text-4sm font-normal group-hover:text-branded leading-tight sm:leading-normal text-left">
                  Hacktoberfest 2023 Pledge
                </p>
                <div className="pt-1 flex justify-start items-center">
                  <div className="inline-block bg-bg-badge px-1 min-w-[0.5rem] rounded-md">
                    <span className="text-badge text-4xs leading-none">
                      New
                    </span>
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
