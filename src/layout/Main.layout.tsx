import { Stack } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { MainContainer, SectionContainer } from "./main-layout.styles";

interface MainLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainContainer maxWidth="lg">
      <Header />
      <SectionContainer maxWidth="lg">
        <Stack spacing={2} alignItems={"center"}>
          {children}
        </Stack>
      </SectionContainer>
    </MainContainer>
  );
};
