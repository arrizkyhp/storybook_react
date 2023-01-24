import React, { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** Variasi Button */
  variant: "primary" | "secondary";
};

const Button = (props: Props) => {
  const { children, variant, ...otherProps } = props;

  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "blue" : "gray",
        color: variant === "primary" ? "white" : "black",
        border: "none",
        borderRadius: 100,
        padding: 10,
        cursor: "pointer",
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
