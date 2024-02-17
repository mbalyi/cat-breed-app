import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const CardBox = styled(MuiCard)`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 350px;
    max-height: 450px;
`;