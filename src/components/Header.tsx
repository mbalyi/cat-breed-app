import { Box } from "@mui/material";
import SmallImg from "./../assets/header-small.jpg";
import MediumImg from "./../assets/header-medium.jpg";
import LargeImg from "./../assets/header-large.jpg";

export const Header = () => (
  <Box
    component="img"
    sx={{
      width: "100%",
    }}
    alt="Cat breed header image"
    src={LargeImg}
    srcSet={`${SmallImg} 400w, ${MediumImg} 800w, ${LargeImg} 1200w`}
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100%"
  />
);
