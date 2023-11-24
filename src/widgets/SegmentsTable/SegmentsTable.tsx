import Row from "./Row";
import { SegmentsTableProps } from "./SegmentsTable.types";
import { useAppSelector } from "app/store/hooks";
import styles from "./SegmentsTable.module.scss";

const SegmentsTable: React.FC<SegmentsTableProps> = () => {
  const { segments } = useAppSelector((state) => state.segments);

  return (
    <div>
      <div className={styles.head}>
        <div>IP-адрес</div>
        <div>Порт</div>
      </div>

      <div className={styles.body}>
        {segments ? (
          segments.map((segment) => <Row key={segment.id} segment={segment} />)
        ) : (
          <div className={styles.notFoundSegments}>
            Удаленные сегменты не заданы
          </div>
        )}
      </div>
    </div>
  );
};

export default SegmentsTable;
