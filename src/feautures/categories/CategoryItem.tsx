import { memo } from "react";
import { useActions } from "../../hooks/useAction";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import { ICategory } from "../../types/categoriesTypes";

interface IProps {
  item: ICategory;
  mobile?: boolean;
}

const CategoryItem = ({ item, mobile = false }: IProps) => {
  const { setCategory } = useActions();

  return (
    <ListItem key={item.id} disablePadding>
      <ListItemButton onClick={() => setCategory(item.id)}>
        <ListItemIcon>
          {item.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={item.name} sx={{ opacity: mobile ? 0 : 1 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default memo(CategoryItem);
