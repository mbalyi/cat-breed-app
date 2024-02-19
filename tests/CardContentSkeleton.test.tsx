import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { CardContentSkeleton } from "../src/components/CardContentSkeleton";

test("renders CardContentSkeleton", () => {
  const { getByTestId } = render(<CardContentSkeleton />);
  const imageSkeleton = getByTestId("skeleton-image");
  const breedTypeSkeleton = getByTestId("skeleton-breed-type");
  const originSkeleton = getByTestId("skeleton-origin");
  const descriptionSkeleton = getByTestId("skeleton-description");

  expect(imageSkeleton).toBeInTheDocument();
  expect(breedTypeSkeleton).toBeInTheDocument();
  expect(originSkeleton).toBeInTheDocument();
  expect(descriptionSkeleton).toBeInTheDocument();
});
