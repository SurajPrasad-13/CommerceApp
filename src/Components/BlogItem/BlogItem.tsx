import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
const BlogItem = () => {
  return (
    <div className="blogItem rounded-md group hover:shadow-lg mb-8 transition-all duration-400">
      <div className="imgWrapper w-full overflow-hidden rounded-md relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg"
          alt="blog image"
          className="w-full transition-all duration-400 group-hover:scale-105 cursor-pointer "
        />
        <span className="flex items-center juce text-white absolute bottom-3 right-3.5 z-50 bg-primary rounded-md p-1 text-xs font-medium gap-1">
          <IoMdTime /> 13 April, 2025
        </span>
      </div>
      <div className="info py-4 px-3">
        <h2 className=" font-medium text-black text-[15px] ">
          <Link to="/" className="link">
            Lorem ipsum dolor sit amet.
          </Link>
        </h2>
        <p className=" text-sm text-[rgba(0,0,0,0.7)] mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
          et, est sapiente quas illum amet, enim numquam...
        </p>
        {/* <Link to="/" className="">
          <p className="hover:text-primary font-medium text-sm flex items-center group ">
            Read More{" "}
            <IoIosArrowForward className=" group-hover:translate-x-1 duration-400 " />{" "}
          </p>
        </Link> */}
        <Link to="/" className="group/readmore inline-block">
          <p className="hover:text-primary font-medium text-sm flex items-center gap-1">
            Read More
            <IoIosArrowForward className="transition-transform duration-300 group-hover/readmore:translate-x-1" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
