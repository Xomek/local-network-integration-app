import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.scss";

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  return (
    <label className={styles.textField}>
      {label && <span className={styles.label}>{label}</span>}

      <input className={styles.field} type="text" {...props} />
    </label>
  );
};

export default TextField;
