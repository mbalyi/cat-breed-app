import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { CatImage } from "./breed.types";
import React from "react";

export const useListCatImages = (breed?: string) => {
  const queryResult = useInfiniteQuery({
    queryKey: ["catImages"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<CatImage[]>(
          `${import.meta.env.VITE_BASE_URL}/images/search${
            breed ? `?breed_ids=${breed}` : ""
          }`,
          {
            params: {
              limit: import.meta.env.VITE_API_LIMIT,
              page: pageParam - 1,
              breed_ids: breed,
            },
            headers: {
              "x-api-key": import.meta.env.VITE_API_KEY,
            },
          }
        )
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < import.meta.env.VITE_API_LIMIT
        ? undefined
        : allPages.length + 1,
  });
  React.useEffect(() => {
    queryResult.refetch();
  }, [breed]);
  return queryResult;
};
