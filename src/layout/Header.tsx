import { Box } from "@mui/material";
import HeaderImg from "./../assets/header.jpeg";

export const Header = () => (
  <Box
    component="img"
    sx={{
      width: "100%",
    }}
    alt="Cat breed header image"
    src={HeaderImg}
  />
);
