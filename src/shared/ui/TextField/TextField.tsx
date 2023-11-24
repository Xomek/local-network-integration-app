import { TextFieldProps } from "./TextField.types";
import cn from "classnames";
import styles from "./TextField.module.scss";

const TextField: React.FC<TextFieldProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className={cn(styles.textField, className)}>
      {label && <span className={styles.label}>{label}</span>}

      <input className={styles.field} type="text" {...props} />
    </label>
  );
};

export default TextField;
