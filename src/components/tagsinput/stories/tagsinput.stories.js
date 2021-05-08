import React from "react";
import { TagsInput as TagsInputComponent } from "../tagsinput";

export default {
  title: "Components/Form/TagsInput",
  component: TagsInputComponent,
};

export const TagsInput = () => {
  const [items, setItems] = React.useState([]);
  return (
    <form>
      <TagsInputComponent value={items} onChange={setItems} />
    </form>
  );
};
