import { Fab } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/material/styles";
import React from "react";

const Button = styled(Fab)`
  position: fixed;
  bottom: 5%;
  right: 2%;
`;

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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
