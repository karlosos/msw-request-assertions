import { http, HttpResponse } from "msw";

export const FETCH_PRODUCTS_URL = "/api/product";

export const fetchProductsHandler = http.get(FETCH_PRODUCTS_URL, () => {
  return HttpResponse.json([
    {
      id: 1,
      name: "T-Shirt",
    },
    {
      id: 2,
      name: "Suit",
    },
  ]);
});
