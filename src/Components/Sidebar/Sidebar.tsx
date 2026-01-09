import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Sidebar.css";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";

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
            
            
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
