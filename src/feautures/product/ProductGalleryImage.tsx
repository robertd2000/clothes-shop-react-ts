import { memo } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IImage } from "../../types/productTypes";

interface IProps {
  galleryImages: IImage[];
}

const ProductGalleryImage = ({ galleryImages }: IProps) => {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="woven"
      cols={galleryImages.length > 3 ? 3 : galleryImages.length}
      gap={8}
    >
      {galleryImages.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.imageUrl}?w=161&fit=crop&auto=format`}
            srcSet={`${item.imageUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.thumbnail}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default memo(ProductGalleryImage);
