const SearchTagPage = () => {
  return (
    <>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex gap-x-2">
            <div className="bg-[#F7DF1E1A] py-2 px-3 text-[#F7DF1E] text-2xl shrink-0 rounded-md h-max">
              #
            </div>
            <div>
              <h3 className="py-2 leading-tight text-[1.05rem] sm:text-[1.15rem] text-base-90 font-semibold">
                javascript
              </h3>
              <p className="line-clamp-3 text-base-90 text-3sm font-normal">
                Once relegated to the browser as one of the 3 core technologies
                of the web, JavaScript can now be found almost anywhere you find
                code. JavaScript developers move fast and push software
                development forward; they can be as opinionated as the
                frameworks they use, so
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex gap-x-2">
            <div className="bg-[#7E48101A] py-2 px-3 text-[#7E4810] text-2xl shrink-0 rounded-md h-max">
              #
            </div>
            <div>
              <h3 className="py-2 leading-tight text-[1.05rem] sm:text-[1.15rem] text-base-90 font-semibold">
                java
              </h3>
              <p className="line-clamp-3 text-base-90 text-3sm font-normal">
                More than just a cup of coffee, Java is a high-level,
                class-based, object-oriented programming language that is
                designed to have as few implementation dependencies as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-auto shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="flex gap-x-2">
            <div className="bg-[#0000001A] py-2 px-3 text-[#000000] text-2xl shrink-0 rounded-md h-max">
              #
            </div>
            <div>
              <h3 className="py-2 leading-tight text-[1.05rem] sm:text-[1.15rem] text-base-90 font-semibold">
                javascriptlibraries
              </h3>
              <p className="line-clamp-3 text-base-90 text-3sm font-normal"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTagPage;
