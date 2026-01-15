import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductItem from "../../Components/ProductItem/ProductItem";
import ProductItemList from "../../Components/ProductItemList/ProductItemList";

// MIU Components
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

// Images
import FloralChiffonSaree1 from "../../assets/FloralChiffonSaree1.webp";
import FloralChiffonSaree2 from "../../assets/FloralChiffonSaree2.webp";
import PinkSaree1 from "../../assets/PinkSaree1.jpg";
import PinkSaree2 from "../../assets/PinkSaree2.jpg";

// React icons
import { IoGridSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const ProductListing = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [itemView, setItemView] = useState("grid");
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="pt-5">
      {/* BreadCrums Section */}
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/" className="link">
            Fashion
          </Link>
          <Typography sx={{ color: "text.primary" }}>
            Product Name or Category
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4 ">
        <div className="container flex gap-3">
          {/* SideBar Component Container */}
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%] py-3">
            {/* Invertory Info and sortBy Section */}
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions z-10">
                <Button
                  className={`size-10! min-w-10! rounded-full! text-black`}
                  onClick={() => setItemView("list")}
                >
                  <TiThMenu
                    className={`${
                      itemView === "list" ? "text-primary" : "text-black/70"
                    }  text-lg`}
                  />
                </Button>
                <Button
                  className={`size-10! min-w-10! rounded-full! `}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp
                    className={`${
                      itemView === "grid" ? "text-primary" : "text-black/70"
                    }  text-lg`}
                  />
                </Button>
                <span className="text-sm font-medium pl-3 text-black/70">
                  There are 27 Products.{" "}
                </span>
              </div>
              <div className="col2 flex items-center justify-end gap-1 pr-4">
                <span className="text-sm font-semibold  text-black/70">
                  Sort By :
                </span>

                {/* Drop Down Menu */}
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="bg-white! text-black! border-2! border-gray-400!"
                >
                  Sales, highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="text-sm! capitalize"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-sm! capitalize"
                  >
                    Relevance{" "}
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-sm! capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-sm! capitalize"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-sm! capitalize"
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-sm! capitalize"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            {/* Product Display Section */}
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-2 md:grid-cols-4 xl:grid-cols-5"
                  : "grid-cols-1"
              }  gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItem
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItem
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItem
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItem
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />

                  <ProductItem
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItem
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItem
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                </>
              ) : (
                <>
                  <ProductItemList
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItemList
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItemList
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItemList
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItemList
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />

                  <ProductItemList
                    discount={22}
                    img={[PinkSaree1, PinkSaree2]}
                    brand={"Koskii"}
                    title={"Pink Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                  <ProductItemList
                    discount={22}
                    img={[FloralChiffonSaree1, FloralChiffonSaree2]}
                    brand={"Koskii"}
                    title={"Floral Beads and Stones Pure Chiffon Saree"}
                    newPrice={1850}
                    oldPrice={2450}
                  />
                </>
              )}
            </div>
            <div className=" flex justify-center pt-6">
              <Pagination count={6} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
