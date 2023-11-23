import { Button } from "shared/ui";
import { AddSegment } from "features";
import { Header, SegmentForm, SegmentsTable } from "widgets";

const Main: React.FC = () => {
  return (
    <div className="container">
      <Header />

      <AddSegment />

      <div className="section">
        <div className="section-title mb-20">Удаленные сегменты</div>
        <SegmentsTable />
      </div>

      <div className="section">
        <div className="section-title mb-20">Локальный сегмент</div>

        <SegmentForm />

        <div className="dfac gap-20">
          <Button>Сохранить</Button>
          <Button>Отмена</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
