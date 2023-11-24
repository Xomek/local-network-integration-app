import { useState } from "react";
import { TextField } from "shared/ui";
import { CreateSegmentFormProps } from "./CreateSegmentForm.types";
import SaveIcon from "shared/assets/icons/save.svg";
import CloseIcon from "shared/assets/icons/close.svg";
import { useActions } from "shared/hooks/useActions";
import styles from "./CreateSegmentForm.module.scss";

const CreateSegmentForm: React.FC<CreateSegmentFormProps> = ({ index }) => {
  const { saveSegment, closeSegmentForm } = useActions();

  const [form, setForm] = useState({ ip: "", port: "" });

  const handleSaveSegment = () => {
    saveSegment(form);
    handleCloseForm();
  };

  const handleCloseForm = () => {
    closeSegmentForm(index);
  };

  const handelChange = (value: string, name: string) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={styles.row}>
      <TextField
        placeholder="IP-адрес"
        value={form.ip}
        onChange={(e) => handelChange(e.target.value, "ip")}
      />
      <TextField
        type="number"
        placeholder="Порт"
        value={form.port}
        onChange={(e) => handelChange(e.target.value, "port")}
      />

      <div className={styles.actions}>
        <SaveIcon onClick={handleSaveSegment} />
        <CloseIcon onClick={handleCloseForm} />
      </div>
    </form>
  );
};

export default CreateSegmentForm;
