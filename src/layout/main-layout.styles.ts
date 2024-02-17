import { ContainerProps, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Container)<ContainerProps>`
    height: 100vh;
    padding-left: 0;
    padding-right: 0;

    .infinite-scroll-component__outerdiv {
        width: 100%;
    }
`;

export const SectionContainer = styled(Container)<ContainerProps>`
    background-image: linear-gradient(156deg, #F9F9FA 55%, #eaadb1 100%);
    margin-top: -4px;
    min-height: calc(100vh - 381px);
    padding-top: 4px;
    padding-bottom: 4px;
`