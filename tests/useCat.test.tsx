import { test, expect, afterEach } from "vitest";
import { useCat } from "../src/features/breeds/useCat";
import axios from "../src/utils/axios";
import MockAdapter from "axios-mock-adapter";
import { renderHookWithProvider, waitFor } from "./utils";
import { mockCatQuery } from "./queryUtils";

const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

test("useCat should fetch and return cat and breed data", async () => {
  const mockCat = {
    id: "cat1",
    url: "https://example.com/cat1.jpg",
    breeds: [{ id: "breed1", name: "Breed 1" }],
  };
  mockCatQuery(mock, "cat1", mockCat);
  const { result } = renderHookWithProvider(() => useCat("cat1"));
  await waitFor(
    () => result.current.cat !== null && result.current.breed !== null
  );
  expect(result.current.cat).toEqual(mockCat);
  expect(result.current.breed).toEqual(mockCat.breeds[0]);
});
