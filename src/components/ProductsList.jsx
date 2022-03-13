import axios from "axios";
import { useEffect, useState } from "react";
import { ProductUI } from "../pages/ProductUI";
import Grid from "@mui/material/Grid";
import { Loading } from "./Loading";

export function ProductsList() {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      getProducts();
    }
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      {products ? (
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductUI product={product} />
              </div>
            );
          })}
        </Grid>
      ) : (
        <Loading />
      )}
    </>
  );
}
