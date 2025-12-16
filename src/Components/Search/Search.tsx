import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox  w-full h-12 bg-[#e5e5e5] rounded relative ">
      <input
        type="text"
        className="w-full h-11 p-2 focus:outline-none text-sm placeholder:text-[#1f1f1f] "
        placeholder="Search for Products..."
      />
      <Button variant="text" className="absolute! top-1.5 right-1.5 z-50 w-9 min-w-9! h-9 rounded-full! text-slate-600! ">
        <IoSearch className="text-xl text-slate-600" />
      </Button>
    </div>
  );
};

export default Search;
