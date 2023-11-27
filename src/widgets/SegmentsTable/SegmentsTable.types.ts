import { Segment } from "app/types";

export interface SegmentsTableProps {
  segments?: Segment[];
}

export interface RowProps {
  segment: Segment;
}
