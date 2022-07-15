import { Link } from "react-router-dom";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import InventoryIcon from "@mui/icons-material/Inventory";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";

import { IProduct } from "../../types/productTypes";

interface IProps extends IProduct {
  addToCart: (item: any) => void;
}
export const ProductCard = ({
  name,
  description,
  id,
  imageUrl,
  categories,
  price,
  addToCart
}: IProps) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const item = {
      name,
      description,
      id,
      imageUrl,
      categories,
      price,
      amount: 1
    };

    addToCart(item);
  };

  return (
    <Link to={`/products/${id}`}>
      <ImageListItem>
        <img
          src={`${imageUrl}?w=248&fit=crop&auto=format`}
          srcSet={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={name}
          loading="lazy"
        />
        <ImageListItemBar
          title={name}
          subtitle={`Цена: ${price} рублей`}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`Купить`}
              onClick={handleAddToCart}
            >
              <InventoryIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    </Link>
  );
};
