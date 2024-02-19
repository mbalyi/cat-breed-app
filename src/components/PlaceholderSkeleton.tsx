import { Grid } from "@mui/material";
import Card from "./Card";

/**
 * Renders a placeholder skeleton of cards.
 *
 * @returns {JSX.Element[]} An array of JSX elements representing the placeholder skeletons.
 */
export const PlaceholderSkeleton = () =>
  Array.from(Array(parseInt(import.meta.env.VITE_API_LIMIT)).keys()).map(
    (_item, index) => (
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        key={index}
        data-testid="placeholder-skeleton"
      >
        <Card />
      </Grid>
    )
  );
