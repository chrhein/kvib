import React, { ComponentPropsWithoutRef } from "react";
import "./style.css";

export interface SideMenuProps extends ComponentPropsWithoutRef<"div">{
  direction?: "horizontal" | "vertical";
}

export interface SideMenuItemProps extends ComponentPropsWithoutRef<"div"> {
  icon?: string;
  label?: string;
}

export const SideMenu = (props: SideMenuProps) => {
  const direction = props.direction || "vertical";
  return (
    <div className={`kv-side-menu kv-side-menu__${direction}`}>{props.children}
    </div>
  );
};

export const SideMenuItem = (props: SideMenuItemProps) => {
  return (
    <div className="kv-side-menu__item">
      <div className="kv-side-menu__item__icon">
        <span className="material-symbols-outlined">{props.icon}</span>
      </div>
      <div className="kv-side-menu__item__label">{props.label}</div>
    </div>
  );
};
