import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const CatSlider = () => {
  return (
    <div className="homeCatSlider py-4">
      <div className="md:px-10 lg:px-15">
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761905971086_file_1734525231018_bag.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761905982766_file_1734525239704_foot.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-2 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-2 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761906015678_file_1734525275367_well.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>        
                  
          <SwiperSlide className="group ">
            <Link to="/">
              <div className="item  p-3 bg-white rounded-sm text-center fle items-end justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1761906025549_file_1734525286186_jw.png"
                  alt=""
                  className="p-3 group-hover:scale-110 transition-all duration-300 "
                />
                <h3 className="text-[13px] mt-2 font-medium ">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>          
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
