// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";
import womenJeans1 from "../../assets/Women-Wide-Leg-Light-Fade-1.jpg";
import womenJeans2 from "../../assets/Women-Wide-Leg-Light-Fade-2.jpg";
import PrintedKurta1 from "../../assets/printedAnarkaliKurta-1.jpg";
import PrintedKurta2 from "../../assets/printedAnarkaliKurta-2.jpg";
import CasualBrownShirt1 from "../../assets/CasualBrownShirt1.jpg";
import CasualBrownShirt2 from "../../assets/CasualBrownShirt2.jpg";
import PurpleCasualShirt1 from "../../assets/PurpleCasualShirt1.webp";
import PurpleCasualShirt2 from "../../assets/PurpleCasualShirt2.webp";
const ProductSlider = (props: { items: number }) => {
  return (
    <section className="productSlider py-3">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=" ">
          <ProductItem
          discount={10}
            img={[womenJeans1, womenJeans2]}
            brand={"Flying Machine"}
            title={"women relax fit light fade jeans"}
            newPrice={50}
            oldPrice={59}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem
          discount={17}
            img={[PrintedKurta1, PrintedKurta2]}
            brand={"ftDiva"}
            title={"mandarin collar printed anarkali kurta"}
            newPrice={785}
            oldPrice={899}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem
          discount={24}
            img={[CasualBrownShirt1, CasualBrownShirt2]}
            brand={"Campus Sutra"}
            title={"Cuban Collar Polycotton Casual Shirt"}
            newPrice={2200}
            oldPrice={1850}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem
          discount={24}
            img={[PurpleCasualShirt1, PurpleCasualShirt2]}
            brand={"Allen Solly"}
            title={"Pure cotton purple Casual Shirt"}
            newPrice={1999}
            oldPrice={2250}
          />
        </SwiperSlide>
        {/* <SwiperSlide className=" ">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ProductItem />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
