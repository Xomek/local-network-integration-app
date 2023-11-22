import styles from "./Modal.module.scss";

const Modal: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}></div>
    </div>
  );
};

export default Modal;
