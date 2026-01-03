import { LiaShippingFastSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { Link } from "react-router-dom";

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

        <div className="footer flex items-center py-8">
          <div className="part1">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
