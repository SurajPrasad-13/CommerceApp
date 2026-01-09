import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// import BannerBox from "../BannerBox/BannerBox";
import BannerBoxV2 from "../BannerBoxV2/BannerBoxV2";
const AdsBannerSliderV2 = (props: { items: number }) => {
  return (
    <div className="py-4 w-full">
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
        modules={[Navigation, Autoplay]}
        className="smlBtn"
      >
        <SwiperSlide className=" ">
          <BannerBoxV2
            info="left"
            image="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBoxV2
            info="left"
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBoxV2
            info="left"
            image="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBoxV2
            info="left"
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBoxV2
            info="left"
            image="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannerBoxV2
            info="left"
            image="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
