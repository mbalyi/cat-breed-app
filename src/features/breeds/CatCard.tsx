import { FC, memo } from "react";
import { useCat } from "./useCat";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardContentSkeleton } from "../../components/CardContentSkeleton";
import { CardBox } from "../../components/card.styles";
import { CardMedia, Description } from "./cat-card.styles";

interface CatCardProps {
  id: string;
}

/**
 * Renders a card component for a cat with the provided ID.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the cat.
 * @returns {JSX.Element} The rendered CatCard component.
 */
const CatCard: FC<CatCardProps> = ({ id }) => {
  const { cat, breed } = useCat(id);

  return (
    <CardBox>
      {cat ? (
        <>
          <CardMedia
            component="img"
            image={cat.url}
            alt={breed?.name || "Image of cat"}
            loading="lazy"
          />
          <CardContent>
            {breed ? (
              <>
                <Typography component="h2" variant="h5">
                  {breed.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {breed.origin}
                </Typography>
                <Description variant="subtitle1" paragraph>
                  {breed.description}
                </Description>
              </>
            ) : (
              <Typography variant="subtitle1" paragraph>
                Oops, it appears there is no information available.
              </Typography>
            )}
          </CardContent>
        </>
      ) : (
        <CardContentSkeleton />
      )}
    </CardBox>
  );
};

const CatCardMemo = memo(CatCard);

export default CatCardMemo;
