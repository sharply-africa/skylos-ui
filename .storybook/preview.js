import * as React from "react";
import { SkylosProvider } from "../src/system/skylos-provider";

const withTheme = (Story, context) => {
  return (
    <SkylosProvider>
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <Story {...context} />
      </div>
    </SkylosProvider>
  );
};

export const decorators = [withTheme];
