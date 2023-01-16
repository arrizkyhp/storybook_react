import { CSSProperties, ReactNode } from "react";

type StackProps = {
  children: ReactNode | ReactNode[];
  spacing?: number;
  direction?: "row" | "column";
  wrap?: boolean;
};

const Stack = ({
  children,
  spacing = 2,
  direction = "row",
  wrap = false,
}: StackProps) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={style as CSSProperties}>{children}</div>;
};

export default Stack;
