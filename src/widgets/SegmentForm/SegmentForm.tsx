import { useState } from "react";
import { FormValues } from "./SegmentForm.types";
import { Button, Radio, Select, TextField } from "shared/ui";
import cn from "classnames";
import styles from "./SegmentForm.module.scss";

const SegmentsForm: React.FC = () => {
  const [form, setForm] = useState<FormValues>();

  return (
    <form className={styles.form}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>Сетевой интерфейс:</div>

        <Select
          className={styles.select}
          options={[
            { id: 1, name: "тест" },
            { id: 1, name: "тест" },
            { id: 1, name: "тест" },
          ]}
          selectedOption={{ id: 0, name: "" }}
          onSelect={() => {}}
          placeholder="Выберите из списка"
        />
      </div>

      <div className={styles.item}>
        <div className={styles.itemTitle}>Слушащий порт:</div>

        <div className="dfac gap-20">
          <TextField
            className={styles.numberInput}
            type="number"
            value=""
            onChange={() => {}}
            placeholder="Порт"
          />
          <Select
            className={styles.select}
            options={[
              { id: 1, name: "тест" },
              { id: 1, name: "тест" },
              { id: 1, name: "тест" },
            ]}
            selectedOption={{ id: 0, name: "" }}
            onSelect={() => {}}
            placeholder="Выберите из списка"
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.itemTitle}>
          Время жизни при отсутствии трафика:
        </div>

        <TextField
          className={styles.numberInput}
          type="number"
          value=""
          onChange={() => {}}
        />
      </div>

      <div className={styles.item}>
        <div className={cn(styles.itemTitle, "alself-start")}>
          Обработка unicast:
        </div>

        <div>
          <Radio
            className={styles.radio}
            name="unicast"
            label="drop"
            defaultChecked
          />
          <Radio className={styles.radio} name="unicast" label="broadcast" />
          <Radio
            className={styles.radio}
            name="unicast"
            label="smart-broadcast"
          />
        </div>
      </div>

      <div className="dfac gap-20">
        <Button>Сохранить</Button>
        <Button>Отмена</Button>
      </div>
    </form>
  );
};

export default SegmentsForm;
