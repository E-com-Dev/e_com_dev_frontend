import { ReactNode } from "react";

export interface IAuthLayout {
  title: ReactNode;
  children: ReactNode;
  btnText?: string;
  footerNode?: ReactNode;
  onAction?: () => void;
  loading?: boolean;
}
