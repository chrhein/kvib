import React, { useState } from "react";
import { SideMenu, SideMenuProps } from "@kvib/react/src/sidemenu";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Komponenter/Navigasjon",
  argTypes: {
    direction: {
      defaultValue: "vertical",
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<SideMenuProps> = (args) => {
  const [selected, setSelected] = useState<number>(0);

  const items = [
    { icon: "check_circle", label: "Årsskiftet 23/24", selected: (selected == 0), setSelected: setSelected },
    { icon: "add", label: "Legg til", selected: (selected == 1), setSelected: setSelected },
    { icon: "settings", label: "Innstillinger", selected: (selected == 2), setSelected: setSelected },
  ];
  return <SideMenu items={items} {...args}>
  </SideMenu>;
};

export const Component = Template.bind({});
Component.args = {};

Component.storyName = "Sidemeny";
