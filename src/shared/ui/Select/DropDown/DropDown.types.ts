import { SelectProps } from "../types";

export interface DropDownProps
  extends Omit<SelectProps, "label" | "className"> {
  handleClose: () => void;
}

export interface Option {
  id: number;
  name: string;
}
