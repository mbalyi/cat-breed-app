import { Stack, Container } from "@mui/material";
import React from "react";
import { Header } from "./Header";

interface MainLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {},
        paddingX: 0,
        height: "100vh",
        // backgroundImage:
        //   'url("//images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/2d0b7940b27f547aacb0af81/pexels-photo-5643798.jpeg?version=")',
        // backgroundPosition: "50% 50%",
      }}
      maxWidth="lg"
    >
      <Header />
      {/* <img
        className="u-expanded-width u-image u-image-default u-image-1"
        src="//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0fc92a9e3373515b89e3b0ed/mnmn-min.jpg"
        data-image-width="1920"
        data-image-height="728"
      ></img> */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: "linear-gradient(156deg, #F9F9FA 55%, #eaadb1 100%)",
          marginTop: "-4px",
          minHeight: "calc(100vh - 381px)",
        }}
      >
        <Stack spacing={2} alignItems={"center"}>
          {children}
        </Stack>
      </Container>
    </Container>
  );
};
