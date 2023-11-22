import { Header } from "widgets";
import { Button } from "shared/ui";
import PlusIcon from "shared/assets/icons/plus.svg";

const Main: React.FC = () => {
  return (
    <div className="container">
      <Header />

      <div className="section dfac gap-20">
        <div className="section-title">Добавить сегмент</div>
        <Button variant="icon">
          <PlusIcon />
        </Button>
      </div>

      <div className="section">
        <div className="section-title mb-20">Удаленные сегменты</div>
      </div>

      <div className="section">
        <div className="section-title mb-20">Локальный сегмент</div>

        <div className="dfac gap-20">
          <Button>Сохранить</Button>
          <Button>Отмена</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
