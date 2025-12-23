import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={20}
          loop={true}
          speed={800} // smooth forward transition
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false, // force one direction
          }}
          modules={[Autoplay, Pagination]}
          className="sliderHome"
        >
          <SwiperSlide className="mx-10">
            <div className="item rounded-2xl overflow-hidden w-[95%]">
              <img
                src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg"
                alt="Banner Slide"
                className="object-cover  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden w-[95%]">
              <img
                src="https://serviceapi.spicezgold.com/download/1763812170460_homeslides2.jpg"
                alt="Banner Slide"
                className="object-cover "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden w-[95%]">
              <img
                src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg"
                alt="Banner Slide"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden w-[95%]">
              <img
                src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden w-[95%]">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
