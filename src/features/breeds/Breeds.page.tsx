import { Autocomplete, ImageList, TextField } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { Breed, CatImage } from "./breed.types";
import CatCard from "./CatCard";

export const BreedsPage = () => {
  const [selectedBreed, setSelectedBreed] = React.useState<Breed | null>(null);
  const [breeds, setBreeds] = React.useState<Breed[]>([]);
  const [cats, setCats] = React.useState<CatImage[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/breeds`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      });
      const breeds = await response.json();
      setBreeds(breeds);
    })();
  }, []);

  React.useEffect(() => {
    selectedBreed
      ? (async () => {
          const response = await fetch(
            `${
              import.meta.env.VITE_BASE_URL
            }/images/search?limit=20&breed_ids=${selectedBreed.id}`,
            {
              headers: {
                "x-api-key": import.meta.env.VITE_API_KEY,
              },
            }
          );
          const cats = await response.json();
          setCats(cats);
        })()
      : (async () => {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/images/search?limit=20`,
            {
              headers: {
                "x-api-key": import.meta.env.VITE_API_KEY,
              },
            }
          );
          const cats = await response.json();
          setCats(cats);
        })();
  }, [selectedBreed]);

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

      <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={4}
        rowHeight={164}
      >
        {cats.map((cat) => (
          <CatCard catImage={cat} breed={selectedBreed} />
        ))}
      </ImageList>
    </>
  );
};
