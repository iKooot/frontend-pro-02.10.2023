import React, { useEffect } from "react";
import { Backdrop, Typography } from "@mui/material";

export function ErrorMessage({ content, onCloseCallback = () => {} }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    onCloseCallback();
  };

  useEffect(() => {
    if (content) setOpen(true);
  }, [content]);

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Typography
        variant="h4"
        sx={{ color: (theme) => theme.palette.error.main }}
      >
        {content}
      </Typography>
    </Backdrop>
  );
}
