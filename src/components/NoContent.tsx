import { Container, Typography } from "@mui/material";
import { FC } from "react";

interface NoContentProps {
  isOnline: boolean;
}

/**
 * Renders a component to display a message when there is no content.
 *
 * @component
 * @param {boolean} props.isOnline - Indicates whether the user is currently online.
 * @returns {JSX.Element} The rendered NoContent component.
 */
export const NoContent: FC<NoContentProps> = ({ isOnline }) => (
  <Container data-testid="no-content">
    {isOnline ? (
      <Typography textAlign={"center"} m="16px">
        Oops, the fluffy purrfect paws vanished.
      </Typography>
    ) : (
      <Typography textAlign={"center"} m="16px">
        You're currently disconnected. Please connect to the internet to view
        the adorable paw prints.
      </Typography>
    )}
  </Container>
);
