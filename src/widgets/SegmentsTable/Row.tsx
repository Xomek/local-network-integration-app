import { useState } from "react";
import { Button, Modal } from "shared/ui";
import { RowProps } from "./SegmentsTable.types";
import { useActions } from "shared/hooks/useActions";
import EditIcon from "shared/assets/icons/edit.svg";
import DeleteIcon from "shared/assets/icons/delete.svg";
import styles from "./SegmentsTable.module.scss";

const Row: React.FC<RowProps> = ({ segment }) => {
  const { deleteSegment } = useActions();
  const [deleteModal, setDeleteModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { id, address, mask } = segment;

  const handleHover = () => {
    setIsHover((prevState) => !prevState);
  };

  const handleEdit = () => {};

  const handleDelete = () => {
    deleteSegment(id);
    handleVisibleModal();
  };

  const handleVisibleModal = () => {
    setDeleteModal((prevState) => !prevState);
    handleHover();
  };

  return (
    <div
      className={styles.row}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div>{address}</div>
      <div>{mask}</div>

      {isHover && (
        <div className={styles.actions}>
          <EditIcon onClick={handleEdit} />
          <DeleteIcon onClick={handleVisibleModal} />
        </div>
      )}

      {deleteModal && (
        <Modal title="Удаление сегмента" close={handleVisibleModal}>
          <div className={styles.modalContent}>
            Сегмент будет удален. Продолжить?
          </div>

          <div className={styles.modalBtn}>
            <Button onClick={handleDelete}>Да</Button>
            <Button onClick={handleVisibleModal}>Нет</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Row;
