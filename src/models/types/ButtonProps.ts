import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonIcon: ReactNode;
  children: ReactNode;
  isDanger?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSuccess?: boolean;
  size?: "sm" | "md" | "lg";
  withIcon?: boolean;
};
