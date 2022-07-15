export interface ImageDetails {
  url: string;
  width: number;
  height: number;
}
export interface ICategory {
  id: number;
  // parentId: number;
  // orderBy: number;
  // enabledProductCount: number;
  productIds: number[];
  // hdThumbnailUrl: string;
  // thumbnailUrl: string;
  imageUrl: string;
  // originalImageUrl: string;
  // originalImage: ImageDetails;
  name: string;
  // thumbnail: ImageDetails;
  // origin: string;
  url: string;
  productCount: number;
  description: string;
  // enabled: boolean;
}
