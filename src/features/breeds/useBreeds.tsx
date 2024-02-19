import axios from "../../utils/axios";
import { useQuery } from "react-query";
import { Breed } from "./breed.types";

/**
 * Custom hook for listing breeds.
 * @returns {QueryResult<Breed[], unknown>} The query result containing the list of breeds.
 */
export const useListBreeds = () => {
  const queryResult = useQuery({
    queryKey: ["breeds"],
    queryFn: ({ signal }) =>
      axios
        .get<Breed[]>("/breeds", {
          signal,
        })
        .then((res) => res.data),
  });
  return queryResult;
};
