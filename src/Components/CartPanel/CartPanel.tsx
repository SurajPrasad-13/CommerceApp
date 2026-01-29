import { MdOutlineDeleteForever } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-78  overflow-x-hidden py-1 px-2 ">
        <div className="cartItem w-full flex items-start gap-3 border-b border-black/20 py-2 ">
          <div className="img w-[25%] overflow-hidden h-23 rounded-md ">
            <img
              src="https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="info w-[75%] pr-3 relative">
            <h4 className=" font-medium link cursor-pointer text-sm">
              Floral Embroidered Saree
            </h4>
            <p className="flex items-center gap-3 my-2 text-sm">
              <span>
                {" "}
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-semibold"> Price : 1234₹</span>
            </p>
            <Tooltip title="Delete">
              <MdOutlineDeleteForever className="text-[22px] absolute top-0 right-2 " />
            </Tooltip>
          </div>
        </div>
        <div className="cartItem w-full flex items-start gap-3 border-b border-black/20 py-2 ">
          <div className="img w-[25%] overflow-hidden h-23 rounded-md ">
            <img
              src="https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="info w-[75%] pr-3 relative">
            <h4 className=" font-medium link cursor-pointer text-sm">
              Floral Embroidered Saree
            </h4>
            <p className="flex items-center gap-3 my-2 text-sm">
              <span>
                {" "}
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-semibold"> Price : 1234₹</span>
            </p>
            <Tooltip title="Delete">
              <MdOutlineDeleteForever className="text-[22px] absolute top-0 right-2 " />
            </Tooltip>
          </div>
        </div>
        <div className="cartItem w-full flex items-start gap-3 border-b border-black/20 py-2 ">
          <div className="img w-[25%] overflow-hidden h-23 rounded-md ">
            <img
              src="https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="info w-[75%] pr-3 relative">
            <h4 className=" font-medium link cursor-pointer text-sm">
              Floral Embroidered Saree
            </h4>
            <p className="flex items-center gap-3 my-2 text-sm">
              <span>
                {" "}
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-semibold"> Price : 1234₹</span>
            </p>
            <Tooltip title="Delete">
              <MdOutlineDeleteForever className="text-[22px] absolute top-0 right-2 " />
            </Tooltip>
          </div>
        </div>
        <div className="cartItem w-full flex items-start gap-3 border-b border-black/20 py-2 ">
          <div className="img w-[25%] overflow-hidden h-23 rounded-md ">
            <img
              src="https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="info w-[75%] pr-3 relative">
            <h4 className=" font-medium link cursor-pointer text-sm">
              Floral Embroidered Saree
            </h4>
            <p className="flex items-center gap-3 my-2 text-sm">
              <span>
                {" "}
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-semibold"> Price : 1234₹</span>
            </p>
            <Tooltip title="Delete">
              <MdOutlineDeleteForever className="text-[22px] absolute top-0 right-2 " />
            </Tooltip>
          </div>
        </div>
        <div className="cartItem w-full flex items-start gap-3 border-b border-black/20 py-2 ">
          <div className="img w-[25%] overflow-hidden h-23 rounded-md ">
            <img
              src="https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="info w-[75%] pr-3 relative">
            <h4 className=" font-medium link cursor-pointer text-sm">
              Floral Embroidered Saree
            </h4>
            <p className="flex items-center gap-3 my-2 text-sm">
              <span>
                {" "}
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-semibold"> Price : 1234₹</span>
            </p>
            <Tooltip title="Delete">
              <MdOutlineDeleteForever className="text-[22px] absolute top-0 right-2 " />
            </Tooltip>
          </div>
        </div>
        <div className="cartItem w-full flex items-start gap-3 border-b border-black/20 py-2 ">
          <div className="img w-[25%] overflow-hidden h-23 rounded-md ">
            <img
              src="https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="info w-[75%] pr-3 relative">
            <h4 className=" font-medium link cursor-pointer text-sm">
              Floral Embroidered Saree
            </h4>
            <p className="flex items-center gap-3 my-2 text-sm">
              <span>
                {" "}
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-semibold"> Price : 1234₹</span>
            </p>
            <Tooltip title="Delete">
              <MdOutlineDeleteForever className="text-[22px] absolute top-0 right-2 " />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="bottomInfo w-full border-t border-black/20 flex items-center justify-between flex-col gap-3 px-4 my-3 absolute bottom-0 right-0">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-semibold">1 item</span>
          <span className="text-primary font-semibold">₹1400</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-semibold">Shipping</span>
          <span className="text-primary font-semibold">₹100</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-semibold">Total (tax excl.) </span>
          <span className="text-primary font-semibold"> ₹ 321 </span>
        </div>
        <div className="w-full flex items-center justify-between gap-3 sticky bottom-0 ">
          <Button className="btn-org md:btn-lg w-[50%] ">
            {" "}
            <Link to="/cart">View Cart</Link>{" "}
          </Button>
          <Button className="btn-org md:btn-lg w-[50%] ">
            {" "}
            <Link to="/cart">CheckOut</Link>{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
