export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export type ButtonVariant = "primary" | "outlined" | "text" | "icon";
