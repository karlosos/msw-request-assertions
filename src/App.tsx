import { useState } from "react";
import "./App.css";
import {
  fetchProducts as fetchProductsApi,
  type FetchProductsRequest,
  type Product,
} from "./api/fetchProducts";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (request: FetchProductsRequest) => {
    const data = await fetchProductsApi(request);
    setProducts(data);
  };

  return (
    <>
      <button onClick={() => fetchProducts({})}>Fetch products</button>
      <button
        onClick={() =>
          fetchProducts({
            sort: {
              field: "id",
              order: "desc",
            },
          })
        }
      >
        ⬇️
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
