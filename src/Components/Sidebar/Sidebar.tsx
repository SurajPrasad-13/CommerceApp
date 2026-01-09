import "./Sidebar.css";
// MUI Components
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

// React Icons
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

// React Collapse Packege
import { Collapse } from "react-collapse";

// Range Slider
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(false);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(false);

  return (
    <aside className="sidebar py-5">
      <div className="box ">
        <h3 className="mb-3 font-semibold flex items-center justify-between pr-3">
          Shop by Category
          <Button
            className="w-7.5! min-w-7.5! h-7.5! rounded-full! "
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
            sx={{ color: "text.primary" }}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </Button>
        </h3>

        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll flex flex-col px-1.5 ">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Fashion"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Electronics"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Bags"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Footwear"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Label"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Fashion"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Electronics"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Bags"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Footwear"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-3 ">
        <h3 className="mb-3 font-semibold flex items-center justify-between pr-3">
          Availability
          <Button
            className="w-7.5! min-w-7.5! h-7.5! rounded-full! text-black!"
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
          >
            {isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </Button>
        </h3>

        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll flex flex-col px-1.5 ">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Available (17)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="In Stock (10)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Not Available (1)"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-3 ">
        <h3 className="mb-3 font-semibold flex items-center justify-between pr-3">
          Size
          <Button
            className="w-7.5! min-w-7.5! h-7.5! rounded-full! text-black!"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </Button>
        </h3>

        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll flex flex-col px-1.5 ">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Small"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Medium"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="Large"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="XL"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: "#ff5252",
                    "&.Mui-checked": {
                      color: "#ff5252",
                    },
                    fontSize: 28,
                  }}
                />
              }
              label="XXL"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3 ">
        <h3 className="mb-3 font-semibold flex items-center justify-between pr-3">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex justify-between py-4 priceRange text-[13px] ">
          <span>
            From : <strong className="">₹{1000}</strong>
          </span>
          <span>
            To : <strong className="">₹{5000}</strong>
          </span>
        </div>
      </div>

      <div className="box mt-3 ">
        <h3 className="mb-3 font-semibold flex items-center justify-between pr-3">
          Filter By Rating
        </h3>
        <div className="flex flex-col">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
