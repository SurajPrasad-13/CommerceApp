import AdsBannerSlider from "../../Components/AdsBannerSlider/AdsBannerSlider";
import CatSlider from "../../Components/CatSlider/CatSlider";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";

// for scrollable tab
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <CatSlider />

      <section className="bg-white py-8">
        <div className="lg:w-[95%] mx-auto ">
          <div className="flex items-center justify-between">
            <div className="leftSec ">
              <h3 className="text-[20px] font-semibold ">Popular Products</h3>
              <p>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductSlider items={5} />
        </div>
      </section>

      <section className="pb-4 bg-white">
        <div className="container">
          <div className="freeShipping w-full p-4 border border-primary flex items-center justify-between rounded-md mb-6  ">
            <div className="col1 flex items-center justify-center gap-4">
              <LiaShippingFastSolid className=" text-2xl sm:text-3xl lg:text-5xl" />
              <p className=" uppercase font-semibold text-sm lg:text-xl">
                free shipping
              </p>
            </div>
            <div className="col2">
              <p className="mb-0 font-medium text-[13px] md:text-[16px] ">
                {" "}
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <div className="col3">
              <p className=" md:text-lg lg:text-2xl font-semibold ">
                - Only $200*
              </p>
            </div>
          </div>
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="pb-5 bg-white">
        <div className="lg:w-[95%] mx-auto">
          <h3 className="text-[20px] font-semibold ">Latest Products</h3>
          <ProductSlider items={4} />
          <div className="container">
            <AdsBannerSlider items={3} />
          </div>
        </div>
      </section>
      <section className="pb-5 bg-white">
        <div className="lg:w-[95%] mx-auto">
          <h3 className="text-[20px] font-semibold ">Featured Products</h3>
          <ProductSlider items={4} />
          <div className="container">
            <AdsBannerSlider items={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
