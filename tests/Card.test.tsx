import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Card from "../src/components/Card";

test("renders Card component with CardContentSkeleton", () => {
  const { getByTestId } = render(<Card />);
  const cardComponent = getByTestId("card");

  expect(cardComponent).toBeInTheDocument();
});
