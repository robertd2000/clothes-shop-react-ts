import { memo, useEffect, useState } from "react";
import { getProduct } from "../service";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import ProductGalleryImage from "../feautures/product/ProductGalleryImage";

import { IProduct } from "../types/productTypes";
import { useActions } from "../hooks/useAction";

const Product = () => {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const { addToCart, getTotals } = useActions();

  useEffect(() => {
    const getProductCall = async () => {
      const res = id !== undefined && (await getProduct(+id));
      setProduct(res);
      setLoading(false);
    };

    getProductCall();
  }, [id]);

  const onAddToCartHandler = () => {
    if (product) {
      addToCart(product);
      getTotals();
    }
  };

  return (
    <div>
      {product && !loading ? (
        <Container sx={{ marginTop: "100px" }}>
          <Box sx={{ height: "100vh" }}>
            {product.name}
            <ProductGalleryImage galleryImages={product.galleryImages} />
            <Typography>
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing={2}
                style={{ margin: "10px auto", textAlign: "center" }}
              >
                <Chip label={`${product.price} рублей`} variant="outlined" />
                <Button variant="contained" onClick={onAddToCartHandler}>
                  Купить
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default memo(Product);
