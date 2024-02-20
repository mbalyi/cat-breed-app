import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { PlaceholderSkeleton } from "../src/components/PlaceholderSkeleton";

test("renders PlacholderSkeleton with right amount of skeletons", () => {
  const numberOfCards = parseInt(process.env.VITE_API_LIMIT as string);
  const { getAllByTestId } = render(<PlaceholderSkeleton />);
  const skeletons = getAllByTestId("placeholder-skeleton");
  expect(skeletons).toHaveLength(numberOfCards);
});
