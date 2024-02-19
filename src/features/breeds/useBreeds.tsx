import axios from "axios";
import { useQuery } from "react-query";
import { Breed } from "./breed.types";
import { useState } from "react";

export const useListBreeds = (): Breed[] => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  console.log("import.meta.env.VITE_BASE_URL", import.meta.env.VITE_BASE_URL);
  useQuery({
    queryKey: ["breeds"],
    queryFn: () =>
      axios
        .get<Breed[]>(`${import.meta.env.VITE_BASE_URL}/breeds`, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        })
        .then((res) => {
          setBreeds(res.data);
          return res.data;
        }),
  });
  return breeds;
};
