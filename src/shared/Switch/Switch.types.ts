export interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  labelOptions?: SwitchLabelOptions;
  disabled?: boolean;
}

export interface SwitchLabelOptions {
  text: string;
  position: SwitchLabelPosition;
}

export type SwitchLabelPosition = "right" | "left";
