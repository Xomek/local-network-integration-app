import { useCallback } from "react";
import { DropDownProps, Option } from "./DropDown.types";
import cn from "classnames";
import styles from "./DropDown.module.scss";

const DropDown: React.FC<DropDownProps> = ({
  options,
  selectedOption,
  onSelect,
  handleClose,
  emptyText,
}) => {
  const handleSelect = useCallback(
    (option: Option) => {
      if (option.id !== selectedOption?.id) {
        onSelect(option);
        handleClose();
      }
    },
    [selectedOption]
  );

  return (
    <div className={styles.dropDown}>
      {options.length ? (
        options.map((option) => (
          <div
            key={option.id}
            className={cn(styles.option, {
              [styles.disabled]: selectedOption?.id === option.id,
            })}
            onClick={() => handleSelect(option)}
          >
            {option.name}
          </div>
        ))
      ) : (
        <div className={styles.emptyText}>{emptyText}</div>
      )}
    </div>
  );
};

export default DropDown;
