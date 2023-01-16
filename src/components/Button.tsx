import React from "react";

type ButtonProps = {
  label: string;
  backgroundColor?: "red" | "green" | "blue";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const Button = ({
  label,
  backgroundColor = "red",
  size = "md",
  onClick,
  ...props
}: ButtonProps) => {
  let scale = 1;

  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 0.75;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };

  return (
    <button style={style} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
