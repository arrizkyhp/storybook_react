import React from "react";

type ButtonProps = {
  label: string;
  backgroundColor?: "red" | "green" | "blue";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  handleClick?: () => void;
};

const Button = ({
  label = "Click",
  backgroundColor = "red",
  size = "md",
  onClick,
  handleClick,
  ...props
}: ButtonProps) => {
  let scale = 1;

  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };

  return (
    <button style={style} onClick={handleClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
