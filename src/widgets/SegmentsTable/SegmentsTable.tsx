import styles from "./SegmentsTable.module.scss";

const SegmentsTable: React.FC = () => {
  return (
    <div>
      <div className={styles.head}>
        <div>IP-адрес</div>
        <div>Порт</div>
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <div>1.1.1.1</div>
          <div>90</div>
        </div>
      </div>

      {/* <div>Удаленные сегменты не заданы</div> */}
    </div>
  );
};

export default SegmentsTable;
