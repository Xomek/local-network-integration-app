import Row from "./Row";
import { SegmentsTableProps } from "./SegmentsTable.types";
import { useAppSelector } from "shared/lib/hooks/";
import CreateSegmentForm from "widgets/CreateSegmentForm";
import styles from "./SegmentsTable.module.scss";

const SegmentsTable: React.FC<SegmentsTableProps> = () => {
  const { segments, segmentForms } = useAppSelector((state) => state.segments);

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

        {segmentForms.map((_, index) => (
          <CreateSegmentForm key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SegmentsTable;
