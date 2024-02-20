import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Header } from "../src/components/Header";
import React from "react";

test("Header component renders correctly", () => {
  const { getByTestId } = render(<Header />);
  const headerComponent = getByTestId("header-component");

  expect(headerComponent).toBeInTheDocument();
});

test("Header component displays the correct image", () => {
  const { getByAltText } = render(<Header />);
  const headerImage = getByAltText("Cat breed header image");

  expect(headerImage).toBeInTheDocument();
  expect(headerImage).toHaveAttribute("src", "/src/assets/header-large.jpg");
  expect(headerImage).toHaveAttribute(
    "srcSet",
    "/src/assets/header-small.jpg 400w, /src/assets/header-medium.jpg 800w, /src/assets/header-large.jpg 1200w"
  );
  expect(headerImage).toHaveAttribute(
    "sizes",
    "(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100%"
  );
});
