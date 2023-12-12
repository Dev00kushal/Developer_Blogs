const Search = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered pl-8 pr-4 py-2 rounded-full w-48 md:w-auto"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          <button className="btn btn-ghost btn-circle">
            </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
