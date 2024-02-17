import { Box } from "@mui/material";
import HeaderImg from "./../assets/header.jpeg";

export const Header = () => (
  <Box
    component="img"
    sx={{
      //   height: 233,
      width: "100%",
      //   maxHeight: { xs: 233, md: 167 },
      //   maxWidth: { xs: 350, md: 250 },
    }}
    alt="Cat breed header image"
    src={HeaderImg}
  />
);
