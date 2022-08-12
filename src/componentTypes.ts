import { ReactElement } from "react";

export interface InputType {
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface IButton {
  className: string,
  title: ReactElement<any, any>,
  onClick?: () => void,
}