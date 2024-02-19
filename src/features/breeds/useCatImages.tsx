import axios from "../../utils/axios";
import { useInfiniteQuery } from "react-query";
import { CatImage } from "./breed.types";
import { useEffect } from "react";

/**
 * Custom hook for fetching a list of cat images for infinite scrolling.
 *
 * @param breed - The breed of the cat images to fetch.
 * @returns The query result object.
 */
export const useListCatImages = (breed?: string) => {
  const queryResult = useInfiniteQuery({
    queryKey: ["catImages"],
    queryFn: ({ signal, pageParam = 1 }) =>
      axios
        .get<CatImage[]>(
          `/images/search${breed ? `?breed_ids=${breed}` : ""}`,
          {
            params: {
              limit: import.meta.env.VITE_API_LIMIT,
              page: pageParam - 1,
              breed_ids: breed,
            },
            signal,
          }
        )
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < import.meta.env.VITE_API_LIMIT
        ? undefined
        : allPages.length + 1,
  });
  useEffect(() => {
    queryResult.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breed]);
  return queryResult;
};
