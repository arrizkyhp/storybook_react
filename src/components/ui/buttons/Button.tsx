import { ButtonVariant } from "~/enum/.";
import styles from "~/styles/ui/Button.module.scss";
import PlusIcon from "~/svg/PlusIcon";
import Spinner from "~/svg/Spinner";
import { ButtonProps } from "~/types/ButtonProps";

const Button = (props: ButtonProps) => {
  const {
    buttonIcon = PlusIcon,
    children,
    className,
    isFullWidth = false,
    isDisabled,
    isLoading = false,
    size = "md",
    variant,
    withIcon,
    ...otherProps
  } = props;

  const styleButton = [styles.button];

  if (isDisabled) styleButton.push(styles.disabled);
  if (isFullWidth) styleButton.push(styles.fullWidth);

  if (variant === ButtonVariant.PRIMARY) styleButton.push(styles.primary);
  if (variant === ButtonVariant.SECONDARY) styleButton.push(styles.secondary);
  if (variant === ButtonVariant.SUCCESS) styleButton.push(styles.success);
  if (variant === ButtonVariant.DANGER) styleButton.push(styles.danger);

  if (size === "sm") styleButton.push(styles.small);
  if (size === "md") styleButton.push(styles.medium);
  if (size === "lg") styleButton.push(styles.large);

  if (className) styleButton.push(className);

  return (
    <button
      className={styleButton.join(" ")}
      disabled={isDisabled}
      type="button"
      {...otherProps}
    >
      {withIcon ? (
        <span className={styles.withIcon}>
          <>
            {buttonIcon} {children}
          </>
        </span>
      ) : isLoading ? (
        <Spinner />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
