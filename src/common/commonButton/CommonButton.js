import Button from "@mui/material/Button";

export default function CommonButton({
  children,
  color,
  disabled,
  size,
  variant,
  sx,
  onClick,
}) {
  return (
    <Button
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
