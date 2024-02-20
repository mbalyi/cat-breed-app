import { test, expect, afterEach } from "vitest";
import { waitFor } from "@testing-library/react";
import { useListBreeds } from "../src/features/breeds/useBreeds";
import axios from "../src/utils/axios";
import MockAdapter from "axios-mock-adapter";
import { renderHookWithProvider } from "./utils";
import { mockListBreedsQuery } from "./queryUtils";

const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

test("useListBreeds should fetch and return a list of breeds", async () => {
  const mockBreeds = [
    { id: "breed1", name: "Breed 1" },
    { id: "breed2", name: "Breed 2" },
  ];
  mockListBreedsQuery(mock, mockBreeds);

  const { result } = renderHookWithProvider(() => useListBreeds());

  await waitFor(() => result.current !== undefined && result.current.isSuccess);
  expect(result.current.data).toEqual(mockBreeds);
});

// TODO: Fix this test
// test("useListBreeds should handle error when fetching breeds", async () => {
//   mock.onGet("/breeds").replyOnce(500, "Internal Server Error");

//   const { result } = renderHookWithProvider(() => useListBreeds());

//   await waitFor(() => result.current !== undefined && result.current.isError);
//   console.log("result.current", result.current);
//   expect(result.current.isError).toEqual(true);
// });
