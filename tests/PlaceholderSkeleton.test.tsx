import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { PlaceholderSkeleton } from "../src/components/PlaceholderSkeleton";

test("renders PlacholderSkeleton with right amount of skeletons", () => {
  const numberOfCards = 8;
  const { getAllByTestId } = render(<PlaceholderSkeleton />);
  const skeletons = getAllByTestId("placeholder-skeleton");
  expect(skeletons).toHaveLength(numberOfCards);
});
