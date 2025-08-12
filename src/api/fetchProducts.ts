import axios from "axios";
import type { SortParam } from "./types";

export type Product = {
  id: number;
  name: string;
};

export type FetchProductsResponse = Product[];

export type FetchProductsRequest = {
  sort?: SortParam;
};

export async function fetchProducts({
  sort,
}: FetchProductsRequest): Promise<FetchProductsResponse> {
  try {
    const params: Record<string, string> = {};

    if (sort) {
      params.sort = `${sort.field}:${sort.order}`;
    }

    const { data } = await axios.get<Product[]>(
      "/api/product",
      {
        headers: {
          "Content-Type": "application/json",
        },
        params,
      }
    );

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}