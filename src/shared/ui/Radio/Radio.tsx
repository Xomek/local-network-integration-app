import { RadioProps } from "./Radio.types";
import cn from "classnames";
import styles from "./Radio.module.scss";

const Radio: React.FC<RadioProps> = ({
  className,
  label,
  checked,
  ...props
}) => {
  return (
    <label className={cn(styles.container, className)}>
      <input className={styles.input} type="radio" {...props} />

      <div className={cn(styles.radio, { [styles.checked]: checked })}>
        <div className={styles.circle} />
      </div>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Radio;
