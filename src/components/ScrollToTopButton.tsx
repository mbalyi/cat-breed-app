import { Fab } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const Button = styled(Fab)`
  position: fixed;
  bottom: 5%;
  right: 2%;
`;

/**
 * Renders a button that appears when the user scrolls down and allows them to scroll back to the top of the page.
 */
export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return isVisible ? (
    <Button
      size="medium"
      color="secondary"
      aria-label="scroll-to-top"
      onClick={handleClick}
      data-testid="scroll-to-top-button"
    >
      <ExpandLessIcon />
    </Button>
  ) : (
    <></>
  );
};
