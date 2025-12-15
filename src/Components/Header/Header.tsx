import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search/Search";
const Header = () => {
  return (
    <header>
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

      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <Search/>
          </div>
          
          <div className="col3 w-[35%]">
            <Link to=""></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
