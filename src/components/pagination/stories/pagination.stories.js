import React from "react";
import { Pagination as PaginationComponent } from "../pagination";

export default {
  title: "Components/Base/Pagination",
  component: PaginationComponent,
  argTypes: {
    onChange: { action: "onChange", control: null, defaultValue: null },
  },
};

export const Pagination = (args) => <PaginationComponent {...args} />;

Pagination.args = {
  total: 20,
};
