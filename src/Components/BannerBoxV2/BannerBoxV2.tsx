import { Link } from "react-router-dom";
import "./BannerV2.css";

const BannerBoxV2 = (props: { image: string; info: string }) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative ">
      <img
        src={props.image}
        alt="banner image"
        className="w-full transition-all duration-400 group-hover:scale-105"
      />
      <div
        className={`info absolute p-5 top-0 right-0  w-[50%] h-full z-50 flex flex-col gap-2 justify-center `}
      >
        <h2 className="text-lg font-semibold"> Lorem ipsum dolor sit.</h2>
        <span className="text-lg text-primary font-semibold "> ₹ 399.00</span>
        <div className="">
          <Link to="/" className="link font-semibold">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
