import { render } from "@testing-library/react";
import { NoContent } from "../src/components/NoContent";
import { test, expect } from "vitest";
import React from "react";

test("renders no content message when online", () => {
  const { getByTestId } = render(<NoContent isOnline={true} />);
  const messageElement = getByTestId("no-content");
  expect(messageElement).toHaveTextContent(
    "Oops, the fluffy purrfect paws vanished."
  );
});

test("renders no internet connection message when offline", () => {
  const { getByTestId } = render(<NoContent isOnline={false} />);
  const messageElement = getByTestId("no-content");
  expect(messageElement).toHaveTextContent(
    "You're currently disconnected. Please connect to the internet to view the adorable paw prints."
  );
});
