import { TextFieldProps } from "./TextField.types";
import cn from "classnames";
import styles from "./TextField.module.scss";

const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <label
      className={cn(styles.textField, className, { [styles.error]: error })}
    >
      {label && <span className={styles.label}>{label}</span>}

      <input className={styles.field} type="text" {...props} />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};

export default TextField;
