const Search = () => {
  return (
    <div className="searchBox w-full h-12 bg-[#e5e5e5] rounded relative p-2">
      <input
        type="text"
        className="w-full h-11 p-2 focus:outline-none text-sm placeholder:text-[#1f1f1f]"
        placeholder="Search for Products..."
      />
      <button></button>
    </div>
  );
};

export default Search;
