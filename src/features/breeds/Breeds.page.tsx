import React, { SyntheticEvent } from "react";
import { useListBreeds } from "./useBreeds";
import { useListCatImages } from "./useCatImages";
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import CatCard from "./CatCard";
import { PlaceholderSkeleton } from "../../components/PlaceholderSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Breed } from "./breed.types";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";
import { NoContent } from "../../components/NoContent";
import { useIsOnline } from "../../components/useIsOnline";

export const BreedsPage = () => {
  const [selectedBreed, setSelectedBreed] = React.useState<Breed | null>(null);
  const isOnline = useIsOnline();
  const {
    data: images,
    fetchNextPage,
    hasNextPage,
    isFetching: isImageFetching,
    isError: isImageError,
  } = useListCatImages(selectedBreed?.id);
  const { data: breeds = [] } = useListBreeds();

  const options = React.useMemo(
    () => breeds.map((breed) => ({ id: breed.id, label: breed.name })),
    [breeds]
  );

  const handleSelect = React.useCallback(
    (
      _event: SyntheticEvent<Element, Event>,
      value: { id: string; label: string } | null
    ) => {
      const breed = breeds.find((breed) => breed.id === value?.id);
      setSelectedBreed(breed ?? null);
    },
    [breeds]
  );

  return (
    <>
      <Autocomplete
        disablePortal
        id="breedList"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onChange={handleSelect}
      />

      <InfiniteScroll
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<Typography>Loading...</Typography>}
        style={{ width: "100%" }}
        dataLength={
          images?.pages.reduce((total, page) => total + page.length, 0) || 0
        }
      >
        <Grid container spacing={2}>
          {images?.pages.map((cats) =>
            cats.map((cat) => (
              <Grid item xs={12} md={6} lg={3} key={cat.id}>
                <CatCard id={cat.id} />
              </Grid>
            ))
          )}
          {isImageFetching && !isImageError && <PlaceholderSkeleton />}
          {isImageError && <NoContent isOnline={isOnline} />}
        </Grid>
      </InfiniteScroll>
      <ScrollToTopButton />
    </>
  );
};
