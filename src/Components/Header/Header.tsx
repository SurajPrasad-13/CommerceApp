import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search/Search";

// React Icons
import { BiGitCompare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

// MUI Components
import Badge from "@mui/material/Badge";
import type { BadgeProps } from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

// UI Components
import Navigation from "./Navigation/Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#ff6767", // 👈 your color
    color: "#fff",
    right: -3,
    top: 1,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {

  const context = useContext(MyContext)
  return (
    <header className="bg-white relative">
      {/* Top Strip */}
      <div className="top-strip py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-xs font-medium">
                Get up to 15% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="link list-none text-sm font-medium transition-all">
                  <Link to="/help-center">Help Center</Link>
                </li>
                <li className="link list-none text-sm font-medium transition-all">
                  <Link to="/order-tracking">Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" sticky top-0 ">
        {/* logo & Search Strip */}
        <div className="header py-1">
          <div className="container mx-auto flex items-center justify-between ">
            <div className="col1 w-[25%]">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="col2 w-[45%] ">
              <Search />
            </div>

            <div className="col3 w-[35%] flex items-center pl-7">
              <ul className="flex items-center justify-end w-full gap-3">
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition-all text-sm font-semibold"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/register"
                    className="link transition-all text-sm font-semibold"
                  >
                    Register
                  </Link>
                </li>

                <li>
                  <Tooltip title="Compare">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="primary">
                        <BiGitCompare />{" "}
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Wishlist">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="primary">
                        <FaRegHeart />{" "}
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Cart">
                    <IconButton aria-label="cart" onClick={()=>context.setOpenCartPanel(true)}>
                      <StyledBadge badgeContent={4} color="primary">
                        <AiOutlineShoppingCart  />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
