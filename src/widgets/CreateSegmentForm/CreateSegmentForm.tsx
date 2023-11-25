import { useState } from "react";
import { TextField } from "shared/ui";
import { CreateSegmentFormProps, FormValues } from "./CreateSegmentForm.types";
import SaveIcon from "shared/assets/icons/save.svg";
import CloseIcon from "shared/assets/icons/close.svg";
import { useActions } from "shared/hooks/useActions";
import styles from "./CreateSegmentForm.module.scss";

const CreateSegmentForm: React.FC<CreateSegmentFormProps> = ({
  form,
  handleEdit,
  handleHover,
  index,
}) => {
  const { saveSegment, closeSegmentForm } = useActions();

  const [formValues, setFormValues] = useState<FormValues>({
    address: form?.address ?? "",
    mask: form?.mask ?? "",
  });

  const handleSaveSegment = () => {
    saveSegment(form);
    handleCloseForm();
  };

  const handleCloseForm = () => {
    if (form) {
      handleEdit();
      handleHover();
    } else {
      closeSegmentForm(index);
    }
  };

  const handelChange = (value: string, name: string) => {
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={styles.row}>
      <TextField
        placeholder="IP-адрес"
        value={formValues.address}
        onChange={(e) => handelChange(e.target.value, "address")}
        error="Неверный формат"
      />
      <TextField
        type="number"
        placeholder="Порт"
        value={formValues.mask}
        onChange={(e) => handelChange(e.target.value, "mask")}
        error="Сегмент с таким портом уже существует"
      />

      <div className={styles.actions}>
        <SaveIcon onClick={handleSaveSegment} />
        <CloseIcon onClick={handleCloseForm} />
      </div>
    </form>
  );
};

export default CreateSegmentForm;
