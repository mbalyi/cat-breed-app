import axios from "axios";
import { useQuery } from "react-query";
import { Breed, CatImage } from "./breed.types";

export const useCat = (
  id: string
): { cat: CatImage | null; breed: Breed | null } => {
  let cat = null;
  let breed = null;
  const queryResult = useQuery({
    queryKey: ["cat", id],
    queryFn: () =>
      axios
        .get<CatImage>(`${import.meta.env.VITE_BASE_URL}/images/${id}`, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        })
        .then((res) => res.data),
  });
  cat = queryResult.data || null;
  if (cat?.breeds && cat.breeds.length) {
    breed = cat.breeds[0];
  }
  return { cat, breed };
};
