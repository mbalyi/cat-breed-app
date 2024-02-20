import { test, expect, afterEach } from "vitest";
import CatCard from "../src/features/breeds/CatCard";
import { renderWithProvider } from "./utils";
import React from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "../src/utils/axios";

const mock = new MockAdapter(axios);
const mockCat = {
  id: "cat1",
  url: "https://example.com/cat1.jpg",
};

afterEach(() => {
  mock.reset();
});

test("CatCard renders correctly with cat and breed data", async () => {
  const mockBreed = {
    id: "breed1",
    name: "Breed 1",
    origin: "Origin 1",
    description: "Description 1",
  };

  mock
    .onGet(`/images/${mockCat.id}`)
    .reply(200, { ...mockCat, breeds: [mockBreed] });

  const { getByAltText, getByText, getByTestId, findByAltText } =
    renderWithProvider(<CatCard id={mockCat.id} />);

  expect(getByTestId("skeleton-image")).toBeInTheDocument();

  await findByAltText(mockBreed.name);

  const catImage = getByAltText(mockBreed.name);
  expect(catImage).toHaveAttribute("src", mockCat.url);

  const breedName = getByText(mockBreed.name);
  expect(breedName).toBeInTheDocument();

  const breedOrigin = getByText(mockBreed.origin);
  expect(breedOrigin).toBeInTheDocument();

  const breedDescription = getByText(mockBreed.description);
  expect(breedDescription).toBeInTheDocument();
});

test("CatCard renders correctly without breed data", async () => {
  mock.onGet(`/images/${mockCat.id}`).reply(200, mockCat);

  const { getByText, findByAltText } = renderWithProvider(
    <CatCard id={mockCat.id} />
  );

  await findByAltText("Image of cat");

  const noInfoMessage = getByText(
    "Oops, it appears there is no information available."
  );
  expect(noInfoMessage).toBeInTheDocument();
});
