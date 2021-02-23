import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    commonjs(),
    terser(),
  ],
  external: ["react", "@emotion/react", "@emotion/styled"],
};
