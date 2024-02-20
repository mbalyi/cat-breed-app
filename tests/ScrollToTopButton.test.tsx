import React from "react";
import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { ScrollToTopButton } from "../src/components/ScrollToTopButton";

test("renders ScrollToTopButton when isVisible is true", async () => {
  const { getByTestId } = render(<ScrollToTopButton />);
  fireEvent.scroll(window, {
    target: { scrollY: 300 },
  });
  const button = getByTestId("scroll-to-top-button");
  expect(button).toBeInTheDocument();
});

test("does not render ScrollToTopButton when isVisible is false", () => {
  const { queryByTestId } = render(<ScrollToTopButton />);
  const button = queryByTestId("scroll-to-top-button");
  expect(button).not.toBeInTheDocument();
});

test("scrolls to top when button is clicked", async () => {
  const { getByTestId, queryByTestId } = render(<ScrollToTopButton />);
  fireEvent.scroll(window, {
    target: { scrollY: 300 },
  });
  const button = getByTestId("scroll-to-top-button");
  vi.stubGlobal("scrollTo", () => {
    fireEvent.scroll(window, {
      target: { scrollY: 0 },
    });
  });
  fireEvent.click(button);
  const buttonLater = queryByTestId("scroll-to-top-button");
  expect(buttonLater).not.toBeInTheDocument();
});
