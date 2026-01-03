import { LiaShippingFastSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#fafafa]">
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-8 ">
          <div className="col flex items-center justify-center flex-col group  w-[18%]">
            <LiaShippingFastSolid className="text-4xl transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1.5" />
            <h3 className=" capitalize font-medium pt-2 text-[15px]">
              Free Shipping
            </h3>
            <p className=" text-xs font-medium text-slate-700">
              For all Orders Over ₹500
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group  w-[18%]">
            <TbTruckReturn className="text-4xl transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1.5" />
            <h3 className=" capitalize font-medium pt-2 text-[15px]">
              30 Days Returns
            </h3>
            <p className=" text-xs font-medium text-slate-700">
              For an Exchange Product
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group  w-[18%]">
            <IoWalletOutline className="text-4xl transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1.5" />
            <h3 className=" capitalize font-medium pt-2 text-[15px]">
              Secured Payment
            </h3>
            <p className=" text-xs font-medium text-slate-700">
              Payment Cards Accepted
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group  w-[18%]">
            <IoGiftOutline className="text-4xl transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1.5" />
            <h3 className=" capitalize font-medium pt-2 text-[15px]">
              Special Gifts
            </h3>
            <p className=" text-xs font-medium text-slate-700">
              Our First Product Order
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group  w-[18%]">
            <BiSupport className="text-4xl transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1.5" />
            <h3 className=" capitalize font-medium pt-2 text-[15px]">
              Support 24/7
            </h3>
            <p className=" text-xs font-medium text-slate-700">
              Contact us Anytime
            </p>
          </div>
        </div>
        <hr />

        <div className="footer flex items-start py-8">
          <div className="part1 w-[25%]">
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-sm font-medium">
              Classyshop - Mega Super Store <br /> 507-Union Trade Centre France
            </p>
            <Link to="mailto:someone@example.com" className="link">
              Sales@ourcompany.com
            </Link>
            <span className="text-lg text-primary font-semibold block w-full my-3">
              (+91) 9876-543-210
            </span>
            <div className="flex items-center gap-2 ">
              <LiaComments className="text-4xl text-primary" />
              <span className="font-semibold">
                Online Chat <br /> Get Expert Help
              </span>
            </div>
          </div>
          <div className="part2 w-[40%] px-3 flex ">
            <div className="part2_col1 w-[45%]">
              <h2 className="text-lg font-semibold mb-3">Products</h2>
              <ul className="list">
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Prices Drop
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    New products
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Best sales
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Contact us
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Sitemap
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Stores
                  </Link>
                </li>
              </ul>
            </div>

            <div className="part2_col2 w-[55%]">
              <h2 className="text-lg font-semibold mb-3">Our company</h2>
              <ul className="list">
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Delivery
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Legal Notice
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Terms and conditions of use
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    About us
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Secure payment
                  </Link>
                </li>
                <li className="list-none text-sm w-full mb-2 ">
                  <Link to="/" className="link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="part3 w-[35%] flex flex-col ">
            <h2 className="text-lg font-semibold mb-3">
              Subscribe to newsletter
            </h2>
            <p className=" text-sm">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <form action="" className="mt-5">
              <input
                type="text"
                className="border-2 border-gray-300 outline-none px-4 rounded-sm w-full h-11 mb-2 focus:border-gray-500 placeholder:font-medium placeholder:text-sm "
                placeholder="Your Email Address..."
              />
              <Button className="btn-org "> SUBSCRIBE</Button>
              <FormControlLabel
                control={
                  <Checkbox 
                    defaultChecked
                    sx={{
                      color: '#ff5252',
                      "&.Mui-checked": {
                        color: '#ff5252',
                      },
                      fontSize:28,
                    }}
                  />
                }
                label="I agree to the terms and conditions and the privacy policy"
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
