import { rest } from "msw";

export const FETCH_PRODUCTS_URL = "*/api/product";

export const fetchProductsHandler = rest.get(
  FETCH_PRODUCTS_URL,
  (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "T-Shirt",
        },
        {
          id: 2,
          name: "Suit",
        },
      ])
    );
  }
);
