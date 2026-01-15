// MUI Components
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import { useState } from "react";

import userIcon from "../../assets/userIcon.png";

import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import ProductData from "../../Components/ProductData/ProductData";
import ProductZoom from "../../Components/ProductZoom/ProductZoom";
import './ProductDetails.css'

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="py-2">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              // underline="hover"
              color="inherit"
              to="/"
              className="link transition-all text-sm"
            >
              Home
            </Link>
            <Link
              color="inherit"
              to="/"
              className="link transition-all text-sm"
            >
              Fashion
            </Link>
            <Typography
              sx={{ color: "text.primary" }}
              className="link transition-all text-sm! cursor-pointer"
            >
              Product Name or Category
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5 ">
        <div className="container flex gap-8">
          {/* Product Image section (Left Section) */}
          <div className="productZoomContainer w-[40%] h-[40vh] sm:h-[50vh] md:h-[52vh]  lg:h-[65vh]  ">
            <ProductZoom />
          </div>

          {/* Product Details Section (Right side) */}
          <div className="productContent w-[60%] px-5">
            <ProductData />
          </div>
        </div>
        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-4">
            <span
              onClick={() => setActiveTab(0)}
              className={`link cursor-pointer font-medium ${
                activeTab === 0 && "text-primary"
              }`}
            >
              Description
            </span>
            <span
              onClick={() => setActiveTab(2)}
              className={`link cursor-pointer font-medium ${
                activeTab === 2 && "text-primary"
              }`}
            >
              Product Details
            </span>
            <span
              onClick={() => setActiveTab(1)}
              className={`link cursor-pointer font-medium ${
                activeTab === 1 && "text-primary"
              }`}
            >
              Reviews (5)
            </span>
          </div>
          {/* Description Tab */}
          {activeTab === 0 && (
            <div className="w-full shadow-md py-5 px-8 rounded-md ">
              <p className="text-black/70 text-sm mb-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                ullam error exercitationem doloremque ad fugit perferendis!
                Ratione magnam error voluptate dicta repellat molestiae!
              </p>
              <h4 className="font-medium">LightWeight Design</h4>
              <p className="text-black/70 text-sm mb-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                ullam error exercitationem doloremque ad fugit perferendis!
                Ratione magnam error voluptate dicta repellat molestiae!
              </p>
              <h4 className="font-medium">Free Shipping & Return</h4>
              <p className="text-black/70 text-sm mb-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                ullam error exercitationem doloremque ad fugit perferendis!
                Ratione magnam error voluptate dicta repellat molestiae!
              </p>
              <h4 className="font-medium">Money Back Guarantee</h4>
              <p className="text-black/70 text-sm mb-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                ullam error exercitationem doloremque ad fugit perferendis!
                Ratione magnam error voluptate dicta repellat molestiae!
              </p>
              <h4 className="font-medium">Online Support</h4>
              <p className="text-black/70 text-sm mb-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                ullam error exercitationem doloremque ad fugit perferendis!
                Ratione magnam error voluptate dicta repellat molestiae!
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div className="w-[80%] shadow-md py-5 px-8 rounded-md ">
              <div className="productReviewContainer w-full">
                <h2 className=" font-medium">Customer questions & answers</h2>
                {/* Reviews Section */}
                <div className="reviewScroll w-full max-h-75 overflow-y-scroll overflow-x-hidden mt-5">
                  <div className="review py-3 border-b border-black/30 w-full flex itece justify-between">
                    <div className="info w-[70%] flex itece gap-2">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img src={userIcon} alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className=""> Rinku Verma</h4>
                        <h5 className="text-sm mb-0"> 2025-12-05</h5>
                        <p className="my-0 text-sm ">
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi dicta, dolores accusamus voluptatum
                          voluptate quae
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="review py-3 border-b border-black/30 w-full flex itece justify-between">
                    <div className="info w-[70%] flex itece gap-2">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img src={userIcon} alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className=""> Rinku Verma</h4>
                        <h5 className="text-sm mb-0"> 2025-12-05</h5>
                        <p className="my-0 text-sm ">
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi dicta, dolores accusamus voluptatum
                          voluptate quae
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="review py-3 border-b border-black/30 w-full flex itece justify-between">
                    <div className="info w-[70%] flex itece gap-2">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img src={userIcon} alt="" />
                      </div>
                      <div className="w-[80%]">
                        <h4 className=""> Rinku Verma</h4>
                        <h5 className="text-sm mb-0"> 2025-12-05</h5>
                        <p className="my-0 text-sm ">
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi dicta, dolores accusamus voluptatum
                          voluptate quae
                        </p>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                </div>{" "}
                <br />
                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-lg "> Add a Review</h2>
                  <form action="" className="w-full py-3">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a Review"
                      multiline
                      rows={4}
                      className="w-full focus:border-0!"
                      // defaultValue="Add your Review"
                    />
                    <Rating name="size-small" size="small" className="my-3" />
                    <div className="flex items-center">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container pt-6">
          <h2 className="text-lg font-semibold">Semilar Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
