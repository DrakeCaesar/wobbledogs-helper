import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/app.ts", // Your main TypeScript file
  output: {
    file: "dist/app.js", // Output bundle file
    format: "iife", // Immediately Invoked Function Expression
    sourcemap: true,
  },
  plugins: [typescript()],
};
