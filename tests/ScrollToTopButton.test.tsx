import React from "react";
import { test, expect } from "vitest";
import { render /*fireEvent*/ } from "@testing-library/react";
import { ScrollToTopButton } from "../src/components/ScrollToTopButton";

// const ScrollWrapper: React.FC<{ children: React.ReactElement }> = ({
//   children,
// }) => (
//   <div style={{ height: "200px" }}>
//     <div style={{ height: "600px" }} />
//     {children}
//   </div>
// );

// TODO - fix this test
// test("renders ScrollToTopButton when isVisible is true", async () => {
//   const { findByTestId, container } = render(
//     <ScrollWrapper>
//       <ScrollToTopButton />
//     </ScrollWrapper>
//   );
//   fireEvent.scroll(container.firstChild || container, {
//     target: { scrollY: 300 },
//   });
//   const button = await findByTestId("scroll-to-top-button");
//   expect(button).toBeInTheDocument();
// });

test("does not render ScrollToTopButton when isVisible is false", () => {
  const { queryByTestId } = render(<ScrollToTopButton />);
  const button = queryByTestId("scroll-to-top-button");
  expect(button).not.toBeInTheDocument();
});

// TODO - fix this test
// test("scrolls to top when button is clicked", async () => {
//   const { findByTestId, container } = render(
//     <ScrollWrapper>
//       <ScrollToTopButton />
//     </ScrollWrapper>
//   );
//   fireEvent.scroll(container.firstChild || container, {
//     target: { scrollY: 100 },
//   });
//   const button = await findByTestId("scroll-to-top-button");
//   expect(button).toBeInTheDocument();
//   fireEvent.click(button);
//   expect(window.scrollY).toBe(0);
// });

// test("sets isVisible to true when scrolling beyond 100 pixels", () => {
//   const { container } = render(
//     <ScrollWrapper>
//       <ScrollToTopButton />
//     </ScrollWrapper>
//   );
//   fireEvent.scroll(container.firstChild || container, {
//     target: { scrollY: 200 },
//   });
//   expect(container.firstChild).toHaveStyle({ height: "200px" });
//   expect(container.firstChild?.firstChild).toHaveStyle({ height: "600px" });
//   expect(container.firstChild?.firstChild?.nextSibling).toBeInTheDocument();
// });

// test("sets isVisible to false when scrolling less than or equal to 100 pixels", () => {
//   const { container } = render(
//     <ScrollWrapper>
//       <ScrollToTopButton />
//     </ScrollWrapper>
//   );
//   fireEvent.scroll(container.firstChild || container, {
//     target: { scrollY: 100 },
//   });
//   expect(container.firstChild).toHaveStyle({ height: "200px" });
//   expect(container.firstChild?.firstChild).toHaveStyle({ height: "600px" });
//   expect(container.firstChild?.firstChild?.nextSibling).not.toBeInTheDocument();
// });
