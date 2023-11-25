export interface CreateSegmentFormProps {
  form?: any;
  index?: number;
  handleEdit?: () => void;
  handleHover?: () => void;
}

export interface FormValues {
  address: string;
  mask: string;
}
