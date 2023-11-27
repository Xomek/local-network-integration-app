import { Segment } from "shared/api/segment/Segment.types";

export interface SegmentsTableProps {
  segments?: Segment[];
}

export interface RowProps {
  segment: Segment;
}
