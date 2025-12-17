import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";

const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen: boolean) => () => {
   props.setisCategoryPanelOpen(newOpen)
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h3 className="px-3 pt-2 font-medium flex items-center justify-between">Shop by Category <IoClose className="text-xl cursor-pointer" onClick={toggleDrawer(false)}/> </h3>
      
    </Box>
  );

  return (
    <>
      
      <Drawer open={props.isCategoryPanelOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
