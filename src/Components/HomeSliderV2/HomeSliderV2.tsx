// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "@mui/material/Button";

const HomeSliderV2 = () => {
  return (
    <div>
      <Swiper
        effect="fade"
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" />
            <div className="info absolute top-0 right-0 duration-700 w-[50%] h-full flex items-start justify-center flex-col z-50 p-8">
              <h4 className="text-lg font-medium w-full text-left mb-3 relative -right-full opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-2xl font-bold w-full relative -right-full opacity-0">
                {" "}
                Women Solid Round Yellow T-Shirt
              </h2>
              <h3 className="font-medium w-full text-left my-3 flex items-center gap-3 relative -right-full opacity-0">
                Starting At Only{" "}
                <span className="text-primary text-2xl font-semibold">
                  {" "}
                  ₹399.00
                </span>
              </h3>
              <div className="shopNow w-full relative -right-full opacity-0">
                <Button className="btn-org ">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
            <div className="info absolute top-0 right-0 duration-700 w-[50%]  h-full flex items-start justify-center flex-col z-50 p-8">
              <h4 className="text-lg font-medium w-full text-left mb-3 relative -right-full opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-2xl font-bold w-full relative -right-full opacity-0">
                {" "}
                Apple iPhone 13 128GB, Pink
              </h2>
              <h3 className="font-medium w-full text-left my-3 flex items-center gap-3 relative -right-full opacity-0">
                Starting At Only{" "}
                <span className="text-primary text-2xl font-semibold">
                  {" "}
                  ₹79000.00
                </span>
              </h3>
              <div className="shopNow w-full relative -right-full opacity-0">
                <Button className="btn-org ">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;
