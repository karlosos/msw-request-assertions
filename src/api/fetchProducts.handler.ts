import { rest } from "msw";

export const fetchProductsHandler = rest.get(
  "*/api/product",
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
