import { SkylosProvider } from "../src/system/skylos-provider";
import * as React from "react";

const withTheme = (StoryFn) => {
  return (
    <SkylosProvider>
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </SkylosProvider>
  );
};

export const decorators = [withTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
