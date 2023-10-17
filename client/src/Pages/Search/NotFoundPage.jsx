const NotFoundPage = () => {
  return (
    <>
      <div className="bg-white rounded-auto mb-2 shadow-card">
        <div className="p-2 sm:p-4 md:p-5">
          <div className="p-16 text-center text-base-90 text-4sm">
            No results match that query
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
