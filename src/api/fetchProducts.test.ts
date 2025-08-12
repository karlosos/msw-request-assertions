import { fetchProducts, type FetchProductsRequest } from "./fetchProducts";
import { FETCH_PRODUCTS_URL } from "./fetchProducts.handler";
import { waitForRequest } from "./mocks/server";

describe("fetchProducts", () => {
  it("WHEN fetchProducts is called without params THEN request with proper URL is sent", async () => {
    // GIVEN
    const request: FetchProductsRequest = {};
    const pendingRequest = waitForRequest("GET", FETCH_PRODUCTS_URL);

    // WHEN
    const response = await fetchProducts(request);

    // THEN
    const apiRequest = await pendingRequest;
    const calledApiUrl = apiRequest.url.toString();
    expect(calledApiUrl).toEqual("http://localhost/api/product");

    expect(response).toStrictEqual(expectedResponse);
  });

  it("WHEN fetchProducts is called with sorting THEN request with proper URL is sent", async () => {
    // GIVEN
    const request: FetchProductsRequest = {
      sort: {
        field: "id",
        order: "asc",
      },
    };
    const pendingRequest = waitForRequest("GET", FETCH_PRODUCTS_URL);

    // WHEN
    const response = await fetchProducts(request);

    // THEN
    const apiRequest = await pendingRequest;
    const calledApiUrl = apiRequest.url.toString();
    expect(calledApiUrl).toEqual("http://localhost/api/product?sort=id:asc");

    expect(response).toStrictEqual(expectedResponse);
  });
});

const expectedResponse = [
  { id: 1, name: "T-Shirt" },
  { id: 2, name: "Suit" },
];
