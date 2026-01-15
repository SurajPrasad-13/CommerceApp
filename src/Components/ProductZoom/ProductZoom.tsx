import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import saree from "../../assets/PinkSaree1.jpg";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/react";

// import required modules
const ProductZoom = () => {
  const previewSlider = [
    { id: 1, img: saree },
    {
      id: 2,
      img: "https://serviceapi.spicezgold.com/download/1742452035508_rtrt4.jpg",
    },
    {
      id: 3,
      img: "https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg",
    },
    {
      id: 4,
      img: "https://serviceapi.spicezgold.com/download/1742452035509_rtrt2.jpg",
    },
  ];

  const [slidIndex, setSlidIndex] = useState(0);
  const zoomSliderBig = useRef<SwiperType>(null);
  const zoomSliderSml = useRef<SwiperType>(null);

  const goto = (index: number) => {
    setSlidIndex(index);
    zoomSliderSml.current?.swiper.slideTo(index);
    zoomSliderBig.current?.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3 h-full">
        <div className="slider w-[15%] h-full overflow-y-hidden! ">
          <SwiperType
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            mousewheel={true}
            modules={[Mousewheel]}
            className="zoomProductSliderThumbs h-full!"
          >
            {previewSlider.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`item rounded-md overflow-hidden cursor-pointer group transition-all duration-200 ${
                      slidIndex === index ? " opacity-100" : "opacity-50"
                    }`}
                    onClick={() => goto(index)}
                  >
                    <img src={item.img} alt="" className="w-full " />
                  </div>
                </SwiperSlide>
              );
            })}
          </SwiperType>
        </div>
        {/* Main Image Slider */}
        <div className="zoomContainer w-[80%] rounded h-full overflow-hidden">
          <SwiperType
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            pagination={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="largeImgSlider"
          >
            {previewSlider.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={item.img}
                  />
                </SwiperSlide>
              );
            })}
          </SwiperType>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
