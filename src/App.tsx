import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { IoClose } from "react-icons/io5";

// MUI Components
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// UI Components
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductZoom from "./Components/ProductZoom/ProductZoom";
import ProductData from "./Components/ProductData/ProductData";
import Login from "./Pages/Login/Login";

const MyContext = createContext({ setOpenProductModel: () => {} });

const App = () => {
  const [openProductModel, setOpenProductModel] = useState(false);
  const [maxWidth, setMaxWidth] = useState("md");
  const [fullWidth, setFullWidth] = useState(true);

  const handleCloseProductModel = () => {
    setOpenProductModel(false);
  };

  const value = { setOpenProductModel };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

{/* Product Model */}
      <Dialog
        open={openProductModel}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailModal"
      >
        <DialogContent>
          <div className="productDetailModalContainer w-full flex items-center relative  ">
            <div className="absolute -top-1 -right-1">
              <Button
                className=" rounded-full!  min-w-3!   text-xl! text-black/70! bg-[#f0f0f0]!"
                onClick={handleCloseProductModel}
              >
                <IoClose className="" />
              </Button>
            </div>
            <div className="col1 w-[40%] pt-4">
              <ProductZoom />
            </div>
            <div className="productContent w-[60%] p-5">
              <ProductData />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default App;
export { MyContext };
