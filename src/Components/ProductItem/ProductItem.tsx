import { Link } from "react-router-dom";
import "./ProductItem.css";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

interface ProductItemProps {
  img: string[];
  brand: string;
  title: string;
  oldPrice: number | string;
  newPrice: number | string;
  discount: number | string;
}

const ProductItem = (props: ProductItemProps) => {
  console.log(props.img);
  return (
    <div className="productItem rounded-md overflow-hidden border border-gray-400 hover:shadow-lg transition-all hover:-translate-y-0.5 ">
      <div className="group imgWrapper w-full  rounded-md relative">
        <Link to="/">
          <div className="img md:h-50 overflow-hidden relative ">
            <img src={props.img[0]} alt="" className="w-full" />
            <img
              src={props.img[1]}
              alt=""
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600 "
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-2.5 left-2.5 z-50 bg-primary text-white rounded-md p-1 text-xs font-medium">
          {props.discount}%
        </span>
        {/* <span className="discount flex items-center absolute top-9.5 left-2.5 z-50 bg-green-600 text-white rounded-md p-1 text-xs font-medium">10%</span> */}
        <div className="actions absolute top-2 group-hover:right-0 -right-11 z-50 flex items-center gap-2 flex-col w-12.5 transition-all duration-300 opacity-0 group-hover:opacity-100 ">
          <Tooltip title="Wishlist" placement="left-start">
            <Button className="size-8! min-w-8! rounded-full! text-black! bg-white! hover:bg-primary/70! hover:text-white group ">
              <FaRegHeart className="text-[18px] text-black group-hover:text-white " />
            </Button>
          </Tooltip>
          <Tooltip title="Compare" placement="left-start">
            <Button className="size-8! min-w-8! rounded-full! text-black! bg-white! hover:bg-primary/70! hover:text-white group ">
              <BiGitCompare className="text-[18px] text-black group-hover:text-white " />
            </Button>
          </Tooltip>
          <Tooltip title="Product Details" placement="left-start">
            <Button className="size-8! min-w-8! rounded-full! text-black! bg-white! hover:bg-primary/70! hover:text-white group ">
              <MdZoomOutMap className="text-[18px] text-black group-hover:text-white " />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info py-3 px-2  ">
        <h6 className="text-xs ">
          <Link to="/" className="link transition-all">
            {props.brand}
          </Link>
        </h6>
        <h3 className="title leading-5 text-xs mt-1 font-medium text-black mb-1 capitalize min-h-10 max-h-10 overflow-hidden">
          <Link to="/" className="link transition-all">
            {props.title}
          </Link>{" "}
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center justify-between  gap-1 mb-3">
          <span className="oldPrice line-through text-gray-500 text-xs font-medium">
            ${props.oldPrice}
          </span>
          <span className="newPrice text-sm text-primary  font-semibold">
            ${props.newPrice}
          </span>
        </div>
        <Button className="w-[97%]    text-primary! border! border-primary! flex items-center text-[13px]! gap-3 font-medium! uppercase! hover:bg-black! hover:text-white! transition-all duration-400 hover:border-black!">
          <AiOutlineShoppingCart className="text-xl " />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
