import Row from "./Row";
import { SegmentsTableProps } from "./SegmentsTable.types";
import styles from "./SegmentsTable.module.scss";

const SegmentsTable: React.FC<SegmentsTableProps> = () => {
  return (
    <div>
      <div className={styles.head}>
        <div>IP-адрес</div>
        <div>Порт</div>
      </div>

      <div className={styles.body}>
        <Row segment={{ ip: "1.1.1.1", port: 3000 }} />
        <Row segment={{ ip: "2.2.2.2", port: 3001 }} />
      </div>

      {/* <div>Удаленные сегменты не заданы</div> */}
    </div>
  );
};

export default SegmentsTable;
