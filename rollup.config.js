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

export default [
  {
    input: "src/index.ts",
    external: ["styling"],
    output: [
      /* {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      }, */
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        minimize: true,
        modules: true,
        extract: true,
        extensions: [".css"],
      }),
      scss(),
      terser(),
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
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
];
