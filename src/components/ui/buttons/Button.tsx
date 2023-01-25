import styles from "~/styles/ui/Button.module.scss";
import PlusIcon from "~/svg/PlusIcon";
import { ButtonProps } from "~/types/ButtonProps";

const Button = (props: ButtonProps) => {
  const {
    buttonIcon = PlusIcon,
    children,
    isFullWidth = false,
    isDanger,
    isDisabled,
    isPrimary,
    isSecondary,
    isSuccess,
    size = "md",
    withIcon,
    ...otherProps
  } = props;

  const styleButton = [styles.button];

  if (isPrimary) styleButton.push(styles.primary);
  if (isSecondary) styleButton.push(styles.secondary);
  if (isSuccess) styleButton.push(styles.success);
  if (isDanger) styleButton.push(styles.danger);
  if (isDisabled) styleButton.push(styles.disabled);
  if (isFullWidth) styleButton.push(styles.fullWidth);

  if (size === "sm") styleButton.push(styles.small);
  if (size === "md") styleButton.push(styles.medium);
  if (size === "lg") styleButton.push(styles.large);

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
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
