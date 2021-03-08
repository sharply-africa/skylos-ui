import React from "react";
import { Badge as BadgeComponent } from "../badge";

export default {
  title: "Components/Base/Badge",
  component: BadgeComponent,
  argTypes: {
    bg: {
      control: "color",
    },
    color: {
      control: "color",
    },

    variant: {
      control: {
        type: "select",
        options: ["success", "error", "pending", "info"],
      },
    },
  },
};

export const Badge = (args) => <BadgeComponent {...args} />;

Badge.args = {
  text: "Hello world",
};
