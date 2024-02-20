import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import MuiCardMedia, { CardMediaProps } from "@mui/material/CardMedia";

export const Description = styled(Typography)`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const CardMedia = styled(MuiCardMedia)<CardMediaProps & {alt: string, loading: string}>`
    width: 100%;
    height: 200px;
    display: block;
    // TODO: add zooming effect
    // transition: transform .2s;

    // :hover {
    //     transform: scale(1.5);
    // }
`
