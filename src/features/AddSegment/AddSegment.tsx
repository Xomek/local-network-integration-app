import { Button } from "shared/ui";
import { useActions } from "shared/hooks/useActions";
import PlusIcon from "shared/assets/icons/plus.svg";

const AddSegment: React.FC = () => {
  const { addSegment } = useActions();

  return (
    <div className="section dfac gap-20">
      <div className="section-title">Добавить сегмент</div>
      <Button variant="icon" onClick={() => addSegment()}>
        <PlusIcon />
      </Button>
    </div>
  );
};

export default AddSegment;
