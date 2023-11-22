import { Option } from "./DropDown/DropDown.types";

export interface SelectProps {
  className?: string;
  options: Option[];
  selectedOption: Option | null;
  onSelect: (option: Option) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  emptyText?: string;
}
