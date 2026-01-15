import QtyBox from "../../Components/QtyBox/QtyBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Button from "@mui/material/Button";
const ProductData = () => {
  const [productSizeIndex, setProductSizeIndex] = useState<number | null>(null);

  return (
    <>
      <h1 className=" text-lg sm:text-xl md:text-2xl font-medium mb-2">
        Floral Embroidered Saree{" "}
      </h1>

      {/* Brand and rating */}
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-xs">
          Brand :{" "}
          <span className="font-medium text-sm text-gray-700 ">kasee</span>
        </span>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="cursor-pointer text-[13px] text-gray-700">
          Review (5)
        </span>
      </div>

      {/* Price and Stock */}
      <div className="flex items-center gap-2 my-1 md:my-3">
        <span className="oldPrice line-through text-gray-500 text-xs font-medium">
          {/* ${props.oldPrice} */}
          ₹2345
        </span>
        <span className="newPrice text-lg md:text-xl  text-primary  font-semibold">
          {/* ${props.newPrice} */}
          ₹1234
        </span>
        <span className="text-xs md:text-sm">
          Available In Stock:
          <span className="text-green-600"> 147 Items</span>{" "}
        </span>
      </div>
      <p className="text-sm md:text-[15px] md:my-3 pr-10  ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        quos vitae quam amet rem distinctio asperiores ex assumenda dignissimos
        necessitatibus officia modi eos ipsam dolore nam fugiat vel dolorum, cum
        porro libero id? Non!
      </p>

      {/* Size Button */}
      <div className="flex items-center gap-3">
        <span className="">Size:</span>
        <div className="flex items-center gap-1">
          <Button
            onClick={() => setProductSizeIndex(0)}
            className={`min-w-10!  border! border-black! text-primary! ${
              productSizeIndex === 0 && "bg-primary! text-white!"
            }`}
          >
            S
          </Button>
          <Button
            onClick={() => setProductSizeIndex(1)}
            className={`min-w-10!  border! border-black! text-primary! ${
              productSizeIndex === 1 && "bg-primary! text-white!"
            }`}
          >
            M
          </Button>
          <Button
            onClick={() => setProductSizeIndex(2)}
            className={`min-w-10!  border! border-black! text-primary! ${
              productSizeIndex === 2 && "bg-primary! text-white!"
            }`}
          >
            L
          </Button>
          <Button
            onClick={() => setProductSizeIndex(3)}
            className={`min-w-10!  border! border-black! text-primary! ${
              productSizeIndex === 3 && "bg-primary! text-white!"
            }`}
          >
            XL
          </Button>
        </div>
      </div>
      <p className=" text-sm pt-3 pb-2 text-black">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <div className="flex items-center gap-2 py-3">
        <div className="qtyBoxWrapper w-17 ">
          <QtyBox />
        </div>
        <Button className="btn-org  border! border-primary! flex items-center text-[13px]! gap-3 font-medium! uppercase! hover:bg-black! hover:text-white! transition-all duration-300! hover:border-black!">
          <AiOutlineShoppingCart className="text-xl " />
          Add to Card
        </Button>
      </div>
      {/* Add to Section */}
      <div className="flex flex-col sm:flex-row  sm:items-center gap-4 my-2">
        <span className=" link cursor-pointer flex items-center gap-2 font-medium text-sm md:text-[16px]">
          {" "}
          <FaRegHeart className="text-lg" />
          Add To Wishlist
        </span>
        <span className=" link cursor-pointer flex items-center gap-2 font-medium text-sm md:text-[16px]">
          {" "}
          <BiGitCompare className="text-lg" />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductData;
