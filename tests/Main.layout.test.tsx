import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MainLayout } from "../src/layout/Main.layout";
import React from "react";

test("MainLayout renders children correctly", () => {
  const { getByText } = render(
    <MainLayout>
      <div>Child Component 1</div>
      <div>Child Component 2</div>
    </MainLayout>
  );

  expect(getByText("Child Component 1")).toBeInTheDocument();
  expect(getByText("Child Component 2")).toBeInTheDocument();
});

test("MainLayout renders Header component", () => {
  const { getByTestId } = render(<MainLayout />);

  expect(getByTestId("header-component")).toBeInTheDocument();
});

test("MainLayout renders SectionContainer component", () => {
  const { getByTestId } = render(<MainLayout />);

  expect(getByTestId("section-container-component")).toBeInTheDocument();
});
