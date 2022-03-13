import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { Loading } from "./Loading";

const cardStyle = {
  display: "block",
  width: "35vw",
  transitionDuration: "0.3s",
  height: "45vw",
};
export function ProductDetail() {
  let params = useParams();
  const [product, setProduct] = useState(null);

  async function getProduct() {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${params.id}`
    );

    const data = await response.data;
    setProduct(data);
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      getProduct();
    }
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      {product ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <CardMedia
                component="img"
                style={cardStyle}
                image={product.image}
                alt="Product Image"
              />{" "}
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ mt: "20%", boxShadow: "0px" }}>
                <CardHeader
                  titleTypographyProps={{ variant: "h4" }}
                  title={product.title}
                  subheader={product.category}
                />
                <CardContent>
                  <Rating name="read-only" value={4} readOnly />
                  <Typography variant="h6" color="black">
                    {product.price}
                    <span>&#8364;</span>
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: "40px" }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
