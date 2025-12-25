import AdsBannerSlider from "../../Components/AdsBannerSlider/AdsBannerSlider";
import CatSlider from "../../Components/CatSlider/CatSlider";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />

      <section className="py-12 bg-white">
        <div className="container">
          <div className="freeShipping w-full p-4 border border-primary flex items-center justify-between rounded-md ">
            <div className="col1 flex items-center justify-center gap-4">
              <LiaShippingFastSolid className=" text-2xl sm:text-3xl lg:text-5xl" />
              <p className=" uppercase font-semibold sm:text-[16px] lg:text-xl">free shipping</p>
            </div>
            <div className="col2">
              <p className="mb-0 font-medium text-sm md:text-[16px] ">
                {" "}
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className=" text-lg md:text-lg lg:text-2xl font-bold ">- Only $200*</p>
          </div>
          <AdsBannerSlider items = {4}/>
        </div>
      </section>
    </>
  );
};

export default Home;
