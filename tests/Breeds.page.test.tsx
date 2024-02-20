import React from "react";
import { test, expect, afterEach } from "vitest";
import { BreedsPage } from "../src/features/breeds/Breeds.page";
import { renderWithProvider } from "./utils";
import MockAdapter from "axios-mock-adapter";
import axios from "../src/utils/axios";
import {
  mockCatQuery,
  mockListBreedsQuery,
  mockListCatImagesQuery,
} from "./queryUtils";

const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

test("renders BreedsPage with autocomplete and infinite scroll", () => {
  mockCatQuery(mock, "cat1");
  mockListBreedsQuery(mock);
  mockListCatImagesQuery(mock, "breed1");
  const { getByTestId } = renderWithProvider(<BreedsPage />);

  const autocomplete = getByTestId("breed-search-autocomplete");
  expect(autocomplete).toBeInTheDocument();

  const infiniteScroll = getByTestId("breed-infinite-scroll-grid");
  expect(infiniteScroll).toBeInTheDocument();
});

test("it loads a card with details", async () => {
  mockCatQuery(mock, "image1", {
    id: "cat1",
    url: "https://example.com/cat1.jpg",
    breeds: [
      {
        id: "breed1",
        name: "Breed 1",
        origin: "Origin 1",
        description: "A fluffy cat",
      },
    ],
  });
  mockListBreedsQuery(mock, [{ id: "persian", name: "Persian" }]);
  mockListCatImagesQuery(mock, undefined, [
    { id: "image1", url: "https://example.com/image1.jpg" },
  ]);
  const { findByText, getByText, findByTestId } = renderWithProvider(
    <BreedsPage />
  );

  await findByTestId("cat-card-title-breed1");
  const description = await findByText("A fluffy cat");
  expect(description).toBeInTheDocument();
  expect(getByText("Origin 1")).toBeInTheDocument();
});

// TODO: add test to check autocomplete changes the selected breed
