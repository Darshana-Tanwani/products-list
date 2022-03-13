import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Products() {
  return (
    <>
      <Typography variant="h4"
        sx={{ textAlign: "center", margin: "30px 0px 40px 0px", fontWeight: "bold" }}>
        Claimazon
        Products
      </Typography>
      <Outlet />
    </>
  );
}
