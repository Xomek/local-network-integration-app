import { useEffect, useMemo, useState } from "react";
import { SelectProps } from "./types";
import DropDown from "./DropDown/DropDown";
import cn from "classnames";
import styles from "./Select.module.scss";

/**
 * @param className Класс, который будет применен родительскому элементу компонента.
 * @param options Массив опций
 * @param selectedOption Выбранная опция
 * @param onSelect Функция которая будет выполнена при клике на опцию
 * @param label Label текст, который будет показывать чуть выше компонента
 * @param placeholder Placeholder который будет отображаться если ни одна опция не выбрана
 * @param disabled Заблокирован селект или нет
 * @param emptyText Текст, который будет показан тогда, когда массив опций оказался пустым
 */

const Select: React.FC<SelectProps> = ({
  className,
  options,
  selectedOption,
  onSelect,
  label,
  placeholder = "Выберите опцию",
  disabled = false,
  emptyText = "К сожалению, нет ни одной опции",
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const textField = useMemo(
    () => (selectedOption?.name ? selectedOption.name : placeholder),
    [selectedOption]
  );

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div
      className={cn(styles.select, className, { [styles.disabled]: disabled })}
      onClick={(e) => e.stopPropagation()}
    >
      {label && <span className={styles.label}>{label}</span>}

      <div
        className={styles.field}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {textField}
      </div>

      {!disabled && open && (
        <DropDown
          options={options}
          selectedOption={selectedOption}
          onSelect={onSelect}
          handleClose={handleClose}
          emptyText={emptyText}
        />
      )}
    </div>
  );
};

export default Select;
