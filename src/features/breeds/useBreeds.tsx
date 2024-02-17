import axios from "axios";
import { useQuery } from "react-query";
import { Breed } from "./breed.types";

export const useListBreeds = (): Breed[] => {
  const queryResult = useQuery({
    queryKey: ["breeds"],
    queryFn: () =>
      axios
        .get<Breed[]>(`${import.meta.env.VITE_BASE_URL}/breeds`, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        })
        .then((res) => res.data),
  });
  return queryResult.data || [];
};
