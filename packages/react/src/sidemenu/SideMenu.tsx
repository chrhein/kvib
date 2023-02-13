import React, {
  ComponentPropsWithoutRef,
  Dispatch,
  forwardRef,
  SetStateAction,
  useState,
} from "react";
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

export const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(
  ({ direction = "vertical", items, ...props }, ref) => {
    const [selected, setSelected] = useState<number>(0);
    return (
      <div className={`kv-side-menu kv-side-menu__${direction}`} ref={ref}>
        {items?.map((item, index) => {
          return (
            <SideMenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              index={index}
              selected={index === selected}
              setSelected={setSelected}
              {...props}
            />
          );
        })}
      </div>
    );
  },
);

const SideMenuItem = forwardRef<HTMLDivElement, SideMenuItemProps>(
  ({ icon, label, index, selected, setSelected, ...props }, ref) => {
    const handleClick = () => {
      if (index !== undefined) {
        setSelected(index);
      }
    };

    return (
      <div
        className={`kv-side-menu__item ${
          selected && "kv-side-menu__item__selected"
        }`}
        onClick={handleClick}
        ref={ref}
      >
        <div className="kv-side-menu__item__icon">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="kv-side-menu__item__label">{label}</div>
      </div>
    );
  },
);
