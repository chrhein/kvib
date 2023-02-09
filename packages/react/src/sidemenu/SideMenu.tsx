import React, { ComponentPropsWithoutRef, Dispatch, SetStateAction, useState } from "react";
import "./style.css";

export interface SideMenuProps extends ComponentPropsWithoutRef<"div"> {
  direction?: "horizontal" | "vertical";
  items?: SideMenuItemProps[];
}

export interface SideMenuItemProps extends ComponentPropsWithoutRef<"div"> {
  icon?: string;
  label?: string;
  index?: number;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<number>>;
}

export const SideMenu = (props: SideMenuProps) => {
  const direction = props.direction || "vertical";
  const [selected, setSelected] = useState<number>(0);
  return <div className={`kv-side-menu kv-side-menu__${direction}`}>
    {props.items?.map((item, index) => {
      return <SideMenuItem
        key={index}
        icon={item.icon}
        label={item.label}
        index={index}
        selected={index === selected}
        setSelected={setSelected}
      />;
    })}
  </div>;
};

const SideMenuItem = (props: SideMenuItemProps) => {
  const { selected, setSelected } = props;
  const handleClick = () => {
    if (props.index !== undefined) {
      setSelected(props.index);
    }
  };

  return (
    <div className={`kv-side-menu__item ${selected && "kv-side-menu__item__selected"}`} onClick={handleClick}>
      <div className="kv-side-menu__item__icon">
        <span className="material-symbols-outlined">{props.icon}</span>
      </div>
      <div className="kv-side-menu__item__label">{props.label}</div>
    </div>
  );
};
