import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import "../Navigation/navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);
  const [innersubmenuIndex, setInnerSubmenuIndex] = useState<number | null>(
    null
  );
  const toggleDrawer = (newOpen: boolean) => () => {
    props.setisCategoryPanelOpen(newOpen);
  };

  const openSubmenu = (index: number | null) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index: number | null) => {
    if (innersubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="px-3 pt-2 font-medium flex items-center justify-between">
        Shop by Category{" "}
        <IoClose
          className="text-xl cursor-pointer"
          onClick={toggleDrawer(false)}
        />{" "}
      </h3>
      <div className="scroll">
        {/* main List */}
        <ul className="w-full">
          <li className="list-none flex flex-col items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full  justify-start!  text-black/70! ">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className=" absolute top-2.5 right-3.5"
                onClick={() => openSubmenu(null)}
              />
            ) : (
              <FaRegPlusSquare
                className=" absolute top-2.5 right-3.5"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu pl-5 w-full  ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="link w-full  justify-start!  text-black/70! ">
                      apparel
                    </Button>
                  </Link>

                  {innersubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className=" absolute top-2.5 right-3.5"
                      onClick={() => openInnerSubmenu(null)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className=" absolute top-2.5 right-3.5"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innersubmenuIndex === 0 && (
                    <ul className="inner_submenu  pl-5 w-full  ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Leather watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Rolling diamond
                        </Link>
                      </li>
                    </ul>
                  )}

                  {/* Sub-Child List */}
                </li>
                {/* <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="link w-full  justify-start!  text-black/70! ">
                    outwear
                  </Button>
                </Link>
                <FaRegPlusSquare className=" absolute top-2.5 right-3.5" />
                <ul className="submenu absolute top-full pl-5 w-full  ">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full  justify-start! transition-all text-sm "
                    >
                      outwear
                    </Link>
                  </li>
                </ul>
              </li> */}
              </ul>
            )}
            {/* First Sub-List */}
          </li>

          <li className="list-none flex flex-col items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full  justify-start!  text-black/70! ">
                outwear
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className=" absolute top-2.5 right-3.5"
                onClick={() => openSubmenu(null)}
              />
            ) : (
              <FaRegPlusSquare
                className=" absolute top-2.5 right-3.5"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu pl-5 w-full  ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="link w-full  justify-start!  text-black/70! ">
                      apparel
                    </Button>
                  </Link>

                  {innersubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className=" absolute top-2.5 right-3.5"
                      onClick={() => openInnerSubmenu(null)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className=" absolute top-2.5 right-3.5"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innersubmenuIndex === 1 && (
                    <ul className="inner_submenu  pl-5 w-full  ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Leather watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full  justify-start! transition-all text-sm "
                        >
                          Rolling diamond
                        </Link>
                      </li>
                    </ul>
                  )}

                  {/* Sub-Child List */}
                </li>
                {/* <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="link w-full  justify-start!  text-black/70! ">
                    outwear
                  </Button>
                </Link>
                <FaRegPlusSquare className=" absolute top-2.5 right-3.5" />
                <ul className="submenu absolute top-full pl-5 w-full  ">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full  justify-start! transition-all text-sm "
                    >
                      outwear
                    </Link>
                  </li>
                </ul>
              </li> */}
              </ul>
            )}
            {/* First Sub-List */}
          </li>
          
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isCategoryPanelOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
