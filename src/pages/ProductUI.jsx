import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

export function ProductUI(props) {
  let navigate = useNavigate();

  return (
    <>
      <Grid item>
        <Card xs={12} md={4} sx={{width:"300px", margin:"0px 0px 40px 40px"}}
          onClick={() => navigate(`/products/${props.product.id}`)}
          
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300px"
              width="50px"
              image={props.product.image}
              alt="Product Image"
            />
            <CardHeader
              sx={{ height: "80px" }}
              titleTypographyProps={{ variant: "subtitle1" }}
              title={props.product.title}
              subheader={props.product.category}
            />
            <CardContent>
              <Rating name="read-only" value={4} readOnly />

              <Typography variant="h6" color="black">
                {props.product.price}
                <span>&#8364;</span>
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
