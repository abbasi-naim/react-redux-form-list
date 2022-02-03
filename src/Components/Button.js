import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import "../Button.css";

export default function BasicButtonGroup() {
  return (
    <Typography align="center">
      <ButtonGroup
        size="small"
        aria-label="small button group"
        sx={{ mt: 1, ml: 5 }}
      >
        <Button>+ Project</Button>
        <Button>+ User</Button>
      </ButtonGroup>
    </Typography>
  );
}
