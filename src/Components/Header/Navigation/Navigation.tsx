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

 {/* ================= CENTER COLUMN ================= */}
    {/* Main navigation links */}
          <div className="col_2 w-[60%] ">
            <ul className="nav flex items-center gap-5">
               {/* ===== NAV ITEM : Fashion ===== */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="navi link transition-all text-sm font-medium"
                >
                  Fashion
                </Link>
                {/* ---------- First level submenu ---------- */}
                <div className="submenu absolute top-[120%] left-[0%] min-w-36 bg-white shadow-md opacity-0 transition-all duration-300 z-50 ">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/men" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)]! w-full justify-start! rounded-none! hover:text-primary!">
                          Men
                        </Button>
                      </Link>
                      {/* ---------- Second level submenu (Right side) ---------- */}
                      <div className="submenu absolute top-[120%] left-[0%] min-w-36 bg-white shadow-md opacity-0 transition-all duration-300 ">
                        <ul>
                           {/* Nested submenu items */}
                          <li className="list-none w-full relative">
                            <Link to="/" className="w-full">
                              <Button className=" w-full justify-start! rounded-none!">
                              t-shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/men" className="w-full">
                              <Button className=" w-full justify-start! rounded-none!">
                                jeans
                              </Button>{" "}
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/men" className="w-full">
                              <Button className=" w-full justify-start! rounded-none!">
                                footwear
                              </Button>{" "}
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/men" className="w-full">
                              <Button className=" w-full justify-start! rounded-none!">
                                watch
                              </Button>{" "}
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/men" className="w-full">
                              <Button className=" w-full justify-start! rounded-none!">
                                Boys
                              </Button>{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* ---------- Second level submenu (Right side) Ends Here ---------- */}
                    </li>

                     {/* Other first level submenu items */}
                    <li className="list-none w-full">
                      <Link to="/men" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full justify-start! rounded-none!">
                          women
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/men" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full justify-start! rounded-none!">
                          kids
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/men" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full justify-start! rounded-none!">
                          Girls
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/men" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full justify-start! rounded-none!">
                          Boys
                        </Button>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* ---------- First level submenu Ends Here ---------- */}
              </li>



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

 {/* Free delivery info */}
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
