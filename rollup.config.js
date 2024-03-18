import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert {type: 'json'};
import {visualizer} from "rollup-plugin-visualizer";

export default [
  {
    input: "src/index.ts",
    external: [
      "react-hook-form",
      /node_modules/
    ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      resolve({
        modulesOnly: true
      }),
      typescript({ 
        tsconfig: "./tsconfig.json",        
        exclude: ["**/__tests__", "**/*.test.tsx", "stories"]
      }),
      postcss(),

      terser(),
      filesize(),
      visualizer({
        open:true
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],    
    external: [/\.css$/],
  },
];