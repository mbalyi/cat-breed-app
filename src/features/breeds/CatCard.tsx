import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Breed, CatImage } from "./breed.types";
import React from "react";
import { styled } from "@mui/material/styles";

const CatCardBox = styled(Card)`
    display: flex,
    flexDirection: column,
    position: relative,
    overflow: hidden,
`;

interface CatCardProps {
  catImage: CatImage;
  breed: Breed | null;
}

const CatCard: React.FC<CatCardProps> = ({ catImage, breed }) => {
  const cat: CatImage | (CatImage & Breed) = React.useMemo(() => {
    let cat = { ...catImage };
    if (breed && !(catImage.breeds && catImage.breeds.length)) {
      cat = { ...catImage, ...breed };
    }
    return cat;
  }, [catImage, breed]);
  return (
    <CatCardBox>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: "200px",
          display: { xs: "none", sm: "block" },
        }}
        image={cat.url}
        alt={cat?.name}
        loading="lazy"
      />
      <CardContent>
        {cat?.name ? (
          <>
            <Typography component="h2" variant="h5">
              {cat.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {cat.origin}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {cat.description}
            </Typography>
          </>
        ) : (
          <Typography variant="subtitle1" paragraph>
            Oops, it appears there is no information available.
          </Typography>
        )}
      </CardContent>
    </CatCardBox>
  );
};

const CatCardMemo = React.memo(CatCard);

export default CatCardMemo;
