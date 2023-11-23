import { Button } from "shared/ui";
import PlusIcon from "shared/assets/icons/plus.svg";

const AddSegment: React.FC = () => {
  return (
    <div className="section dfac gap-20">
      <div className="section-title">Добавить сегмент</div>
      <Button variant="icon">
        <PlusIcon />
      </Button>
    </div>
  );
};

export default AddSegment;
