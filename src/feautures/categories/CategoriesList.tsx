import { memo } from "react";
import { ICategory } from "../../types/categoriesTypes";

import List from "@mui/material/List";
import CategoryItem from "./CategoryItem";

interface IProps {
  categories: ICategory[];
  mobile?: boolean;
}

const CateoriesList = ({ categories, mobile }: IProps) => {
  return (
    <List>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} mobile={mobile} />
      ))}
    </List>
  );
};

export default memo(CateoriesList);
