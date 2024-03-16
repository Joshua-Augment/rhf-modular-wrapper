import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
// To handle css files
import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import packageJson from "./package.json" assert { type: "json" };
import commonjs from "@rollup/plugin-commonjs";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default [
  {
    input: "src/index.ts",
    output: [
      /* {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      }, */
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({
        ignoreGlobal: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        minimize: true,
        modules: true,
        extract: true,
        extensions: [".css"],
      }),
      scss(),
      terser(),
      visualizer({
        filename: path.resolve(`${import.meta.dirname}/stats.html`),
        template: "sunburst",
        gzipSize: true,
        brotliSize: true,
        open: true,
      }),
      // commonjs({
      //   ignoreGlobal: true,
      //   include: /\/node_modules\//,
      //   namedExports: {},
      // }),
      // resolve(),
      // peerDepsExternal(),
      // typescript({ tsconfig: "./tsconfig.json" }),
      // postcss(),
      // terser(),
    ],
  },
  {
    input: "dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
];
