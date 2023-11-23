import { Select, TextField } from "shared/ui";
import cn from "classnames";
import styles from "./SegmentForm.module.scss";

const SegmentsForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={cn(styles.item, "dfac")}>
        <div className={styles.itemTitle}>Сетевой интерфейс:</div>
        <Select
          options={[]}
          selectedOption={{ id: 0, name: "default" }}
          onSelect={() => {}}
        />
      </div>

      <div className={cn(styles.item, "dfac")}>
        <div className={styles.itemTitle}>Слушащий порт:</div>
        <TextField type="number" value="" onChange={() => {}} />
        <Select
          options={[]}
          selectedOption={{ id: 0, name: "default" }}
          onSelect={() => {}}
        />
      </div>

      <div className={cn(styles.item, "dfac")}>
        <div className={styles.itemTitle}>
          Время жизни при отсутствии трафика:
        </div>
        <TextField type="number" value="" onChange={() => {}} />
      </div>

      <div className={cn(styles.item, "dfac")}>
        <div className={styles.itemTitle}>Обработка unicast:</div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </form>
  );
};

export default SegmentsForm;
