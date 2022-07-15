const options = {
  headers: {
    Authorization: "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
  }
};

const storeId = "58958138";

const baseFetch = async (url: string) => {
  const res = await fetch(url, options);
  const json = await res.json();
  return json;
};

export const getProductList = async (offset: number, category: number) => {
  return baseFetch(
    `https://app.ecwid.com/api/v3/${storeId}/products?offset=${offset}&category=${category}`
  );
};

export const getCategories = async () => {
  return baseFetch(`https://app.ecwid.com/api/v3/${storeId}/categories`);
};

export const getProduct = async (productId: number) => {
  return baseFetch(
    `https://app.ecwid.com/api/v3/${storeId}/products/${productId}`
  );
};
