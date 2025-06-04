import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      // Add or override rules here
      "@typescript-eslint/no-unused-vars": "off",      // disables unused vars error
      "@typescript-eslint/no-explicit-any": "off",     // disables 'any' type error
  },
},
];

export default eslintConfig;
