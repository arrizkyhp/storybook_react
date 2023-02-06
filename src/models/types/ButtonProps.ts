import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant } from "~/enum/.";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonIcon?: ReactNode;
  children: ReactNode;
  /** Add custom classname to button */
  className?: string;
  /** Button type variant */
  variant?: `${ButtonVariant}`;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  /** Change button size */
  size?: "sm" | "md" | "lg";
  /** Show Icon on button*/
  withIcon?: boolean;
};
