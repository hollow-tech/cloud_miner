import { HTMLAttributes, ReactNode } from "react";

export interface LinkMenu {
  label: string;
  href?: string;
  id: number;
  icon?: ReactNode;
  notification?: number;
}

export interface AsideMenuProps extends HTMLAttributes<HTMLUListElement> {
  links: LinkMenu[];
}
