import Button from "@mui/material/Button";
import "./navigation.css";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
const Navigation = () => {
  const [isCategoryPanelOpen, setisCategoryPanelOpen] = useState(false);
  const openCategoryPanel = () => {
    setisCategoryPanelOpen(true);
  };
  return (
    <>
      <nav>
        <div className=" flex items-center justify-center px-4 gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className="text-black! gap-2 w-full"
              onClick={openCategoryPanel}
            >
              {" "}
              <RiMenu2Fill className="text-[18px]" /> Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%] ">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Fashion
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Electronics
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Bags
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Footwear
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Groceries
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Beauty
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Wellness
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_2 w-[20%] text-sm flex items-center gap-2 mb-0 mt-0 font-medium ">
            <GoRocket className="text-[18px]" />
            <p> Free International Delivery</p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isCategoryPanelOpen={isCategoryPanelOpen}
        setisCategoryPanelOpen={setisCategoryPanelOpen}
      />
    </>
  );
};

export default Navigation;
