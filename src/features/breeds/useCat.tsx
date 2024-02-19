import axios from "../../utils/axios";
import { useQuery } from "react-query";
import { Breed, CatImage } from "./breed.types";

/**
 * Custom hook to fetch cat image and breed information based on the provided ID.
 *
 * @param id - The ID of the cat image.
 * @returns An object containing the cat image and breed information.
 */
export const useCat = (
  id: string
): { cat: CatImage | null; breed: Breed | null } => {
  let cat = null;
  let breed = null;
  const queryResult = useQuery({
    queryKey: ["cat", id],
    queryFn: ({ signal }) =>
      axios
        .get<CatImage>(`/images/${id}`, {
          signal,
        })
        .then((res) => res.data),
  });
  cat = queryResult.data || null;
  if (cat?.breeds && cat.breeds.length) {
    breed = cat.breeds[0];
  }
  return { cat, breed };
};
