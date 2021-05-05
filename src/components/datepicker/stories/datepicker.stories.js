import React from "react";
import { DatePicker as DatePickerComponent } from "../datepicker";

export default {
  title: "Components/Form/DatePicker",
  component: DatePickerComponent,
  argTypes: {
    onChange: { action: "onChange", control: null, defaultValue: null },
  },
};

export const DatePicker = (args) => <DatePickerComponent {...args} />;

DatePicker.args = {};
