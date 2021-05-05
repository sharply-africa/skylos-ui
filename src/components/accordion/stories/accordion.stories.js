import React from "react";
import { Accordion as AccordionComponent } from "../index";

export default {
  title: "Components/Base/Accordion",
  component: AccordionComponent,
  argsTypes: {
    onChange: { action: "onChange", control: null, defaultValue: null },
  },
};

export const Accordion = (args) => (
  <AccordionComponent {...args}>
    <AccordionComponent.Header>Header</AccordionComponent.Header>

    <AccordionComponent.Content>
      lorem ipsum dolor sit amet
    </AccordionComponent.Content>
  </AccordionComponent>
);

Accordion.args = {
  initialOpen: false,
};
