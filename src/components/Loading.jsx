import { Typography } from "@mui/material";

export function Loading() {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          margin: "20%",
          fontWeight: "bold",
          color: "red",
        }}
        variant="h4"
      >
        Loading.....
      </Typography>
    </>
  );
}
