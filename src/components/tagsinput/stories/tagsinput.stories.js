import React from "react";
import { TagsInput as TagsInputComponent } from "../tagsinput";

export default {
  title: "Components/Form/TagsInput",
  component: TagsInputComponent,
};

export const TagsInput = (args) => <TagsInputComponent {...args} />;

TagsInput.args = {
  value: ["laptop bag", "laptop"],
};
