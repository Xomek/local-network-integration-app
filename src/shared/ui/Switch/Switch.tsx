import { SwitchProps } from "./Switch.types";
import cn from "classnames";
import styles from "./Switch.module.scss";

const Switch: React.FC<SwitchProps> = ({
  className,
  checked,
  onChange,
  labelOptions,
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles.wrapper, className, { [styles.disabled]: disabled })}
      disabled={disabled}
    >
      {labelOptions.position === "left" && (
        <div className={styles.label}>{labelOptions.text}</div>
      )}

      <div
        className={cn(styles.switch, { [styles.active]: checked })}
        onClick={onChange}
      >
        <div className={styles.indicator} />
      </div>

      {labelOptions.position === "right" && (
        <div className={styles.label}>{labelOptions.text}</div>
      )}
    </button>
  );
};

export default Switch;
