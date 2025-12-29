import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import banner4 from "../../assets/banner4.webp";
import banner5 from "../../assets/banner5.webp";
import banner6 from "../../assets/banner6.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";
const AdsBannerSlider = (props: { items: number }) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        navigation={true}
        loop={true}
          speed={800}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false, // force one direction
          }}
        modules={[Navigation,Autoplay]}
        className="smlBtn"
      >
        <SwiperSlide className=" ">
          <BannerBox img={banner1} link={""} />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBox img={banner2} link={""} />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBox img={banner3} link={""} />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBox img={banner4} link={""} />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBox img={banner5} link={""} />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBox img={banner6} link={""} />
        </SwiperSlide>
        {/* <SwiperSlide className=" ">
          <BannerBox
            img={
              "https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
            }
            link={""}
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
