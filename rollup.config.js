import path from "path";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import visualizer from "rollup-plugin-visualizer";
import alias from "@rollup/plugin-alias";
import del from "rollup-plugin-delete";
import svgr from "@svgr/rollup";
import pkg from "./package.json";

const projectRootDir = path.resolve(__dirname);

const srcDir = path.resolve(projectRootDir, "src");

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    alias({
      entries: [
        { find: "components", replacement: `${srcDir}/components` },
        { find: "css-reset", replacement: `${srcDir}/css-reset` },
        { find: "icons", replacement: `${srcDir}/icons` },
        { find: "system", replacement: `${srcDir}/system` },
        { find: "theme", replacement: `${srcDir}/theme` },
        { find: "toast-reset", replacement: `${srcDir}/toast-reset` },
      ],
    }),
    svgr(),
    babel({
      exclude: "node_modules/**",
    }),
    nodeResolve(),
    image(),
    del({ targets: ["dist/*"] }),
    commonjs(),
    terser(),
    visualizer(),
  ],
};
