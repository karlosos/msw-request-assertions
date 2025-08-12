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
    const url = new URL("http://localhost:3000/api/product");
    if (sort) {
      url.searchParams.set("sort", `${sort.field}:${sort.order}`);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return [];
}
