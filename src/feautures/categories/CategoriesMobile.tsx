import { memo } from "react";
import { useTheme } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import CategoriesList from "./CategoriesList";
import { Drawer } from "../../components/Drawer";
import { DrawerHeader } from "../../components/DrawerHeader";

import { ICategory } from "../../types/categoriesTypes";

interface IProps {
  categories: ICategory[];
  window?: () => Window;
}

const CategorisMobile = ({ categories }: IProps) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent" style={{ marginTop: "100px" }}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <CategoriesList categories={categories} mobile={true} />

        <Divider />
      </Drawer>
    </>
  );
};

export default memo(CategorisMobile);
