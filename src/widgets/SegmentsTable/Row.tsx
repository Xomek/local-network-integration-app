import { useState } from "react";
import { RowProps } from "./SegmentsTable.types";
import EditIcon from "shared/assets/icons/edit.svg";
import DeleteIcon from "shared/assets/icons/delete.svg";
import styles from "./SegmentsTable.module.scss";

const Row: React.FC<RowProps> = ({ segment }) => {
  const [isHover, setIsHover] = useState(false);
  const { ip, port } = segment;

  const handleHover = () => {
    setIsHover((prevState) => !prevState);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div
      className={styles.row}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div>{ip}</div>
      <div>{port}</div>

      {isHover && (
        <div className={styles.actions}>
          <EditIcon onClick={handleEdit} />
          <DeleteIcon onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default Row;
