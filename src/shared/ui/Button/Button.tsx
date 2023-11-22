import { ButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "contained",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, { [styles[variant]]: variant })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
