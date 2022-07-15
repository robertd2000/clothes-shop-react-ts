import { memo } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import ShopIcon from "@mui/icons-material/Shop";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { IProduct } from "../../types/productTypes";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper"
};

interface IProps extends IProduct {
  decreaseStuffQuantity?: (item: number) => void;
  deleteFromCart?: (id: number) => void;
  addToCart: (item: any) => void;
  amount: number;
}

const CartItem = ({
  name,
  id,
  imageUrl,
  price,
  amount,
  decreaseStuffQuantity = () => {},
  deleteFromCart = () => {},
  addToCart
}: IProps) => {
  const totalPrice = price * amount;

  const onAddHandler = () => {
    const item = {
      name,
      id,
      imageUrl,
      price,
      amount
    };
    addToCart(item);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={`${imageUrl}?w=248&fit=crop&auto=format`}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <RemoveCircleOutlineIcon
                onClick={() => decreaseStuffQuantity(id)}
              />
              <ListItemText primary={`Количество - ${amount}`} />
              <AddCircleOutlineIcon onClick={onAddHandler} />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary={`Цена - ${price}`} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={`Общая сумма - ${totalPrice}`} />
            </ListItem>
            <Divider light />
          </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => deleteFromCart(id)}
          variant="outlined"
          color="error"
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(CartItem);
