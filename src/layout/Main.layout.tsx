import { Stack } from "@mui/material";
import { FC, ReactElement } from "react";
import { Header } from "../components/Header";
import { MainContainer, SectionContainer } from "./main-layout.styles";

interface MainLayoutProps {
  children?: ReactElement | ReactElement[];
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainContainer maxWidth="lg">
      <Header />
      <SectionContainer maxWidth="lg" data-testid="section-container-component">
        <Stack spacing={2} alignItems={"center"}>
          {children}
        </Stack>
      </SectionContainer>
    </MainContainer>
  );
};
