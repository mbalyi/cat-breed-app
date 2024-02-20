import { test, expect, afterEach } from "vitest";
import { useListCatImages } from "../src/features/breeds/useCatImages";
import axios from "../src/utils/axios";
import MockAdapter from "axios-mock-adapter";
import { renderHookWithProvider, waitFor } from "./utils";
import { mockListCatImagesQuery } from "./queryUtils";

const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

test("useListCatImages should fetch and return a list of cat images", async () => {
  const mockCatImages = [
    { id: "image1", url: "https://example.com/image1.jpg" },
    { id: "image2", url: "https://example.com/image2.jpg" },
  ];
  const breed = "breed1";
  mockListCatImagesQuery(mock, breed, mockCatImages);

  const { result } = renderHookWithProvider(() => useListCatImages(breed));

  await waitFor(
    () =>
      result.current !== undefined &&
      result.current.isSuccess &&
      result.current.data.pages !== undefined &&
      result.current.data.pages.length > 0
  );
  expect(result.current.data.pages).toEqual([mockCatImages]);
});

test("useListCatImages should handle error when fetching cat images", async () => {
  const breed = "breed1";
  mock
    .onGet(`/images/search?breed_ids=${breed}`, {
      params: {
        limit: process.env.VITE_API_LIMIT,
        page: 0,
        breed_ids: breed,
      },
    })
    .replyOnce(500, "Internal Server Error");

  const { result } = renderHookWithProvider(() => useListCatImages(breed));

  await waitFor(() => result.current.isError);
  expect(result.current.isError).toEqual(true);
});
