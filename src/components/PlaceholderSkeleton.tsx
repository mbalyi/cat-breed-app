import { Grid } from "@mui/material";
import Card from "./Card";

export const PlaceholderSkeleton = () =>
  Array.from(Array(parseInt(import.meta.env.VITE_API_LIMIT)).keys()).map(
    (_item, index) => (
      <Grid item xs={12} md={6} lg={3} key={index}>
        <Card />
      </Grid>
    )
  );
