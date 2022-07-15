export interface ICategory {
  enabled: boolean;
  id: number;
}

export interface IImage {
  hdThumbnailUrl: string;
  height: number;
  id: number;
  imageUrl: string;
  orderBy: number;
  originalImageUrl: string;
  smallThumbnailUrl: string;
  thumbnail: string;
  thumbnailUrl: string;
  url: string;
  width: number;
}

export interface IMedia {
  id: string;
  image160pxUrl: string;
  image400pxUrl: string;
  image800pxUrl: string;
  image1500pxUrl: string;
  imageOriginalUrl: string;
  isMain: boolean;
  orderBy: number;
}

export interface IProduct {
  // borderInfo: {dominatingColor: {…}, homogeneity: false}
  categories: ICategory[];
  categoryIds: number[];
  // combinations: []
  createTimestamp: number;
  created: string;
  defaultCategoryId: number;
  defaultCombinationId: number;
  defaultDisplayedPrice: number;
  defaultDisplayedPriceFormatted: string;
  description: string;
  dimensions: { length: number; width: number; height: number };
  discountsAllowed: boolean;
  enabled: boolean;
  fixedShippingRate: number;
  fixedShippingRateOnly: boolean;
  galleryImages: IImage[];
  googleItemCondition: string;
  hdThumbnailUrl: string;
  id: number;
  imageUrl: string;
  inStock: boolean;
  isGiftCard: boolean;
  isSampleProduct: boolean;
  isShippingRequired: boolean;
  media: { images: IMedia[] };
  name: string;
  nameYourPriceEnabled: boolean;
  // options: [{…}]
  originalImage: { url: string; width: number; height: number };
  originalImageUrl: string;
  price: number;
  priceInProductList: number;
  productClassId: number;
  relatedProducts: {
    productIds: number[];
    relatedCategory: {
      categoryId: number;
      enabled: boolean;
      productCount: number;
    };
  };
  seoDescription: "";
  seoTitle: "";
  shipping: { type: string; methodMarkup: number; flatRate: number };
  showOnFrontpage: number;
  sku: string;
  smallThumbnailUrl: string;
  tax: {
    taxable: true;
    defaultLocationIncludedTaxRate: number;
    taxClassCode: string;
  };
  thumbnailUrl: string;
  unlimited: true;
  updateTimestamp: number;
  updated: string;
  url: string;
  volume: number;
}
