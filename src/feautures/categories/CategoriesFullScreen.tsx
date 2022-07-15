import { memo } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import CategoriesList from "./CategoriesList";
import { ICategory } from "../../types/categoriesTypes";
const drawerWidth = "25%";

interface IProps {
  categories: ICategory[];
  window?: () => Window;
}

const CategoriesFullScreen = ({ categories }: IProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <CategoriesList categories={categories} />
        <Divider />
      </Box>
    </Drawer>
  );
};

export default memo(CategoriesFullScreen);
