import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Assign array to a variable first
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:@typescript-eslint/recommended"),
  {
    ignores: ["node_modules/", "dist/", ".next/", "public/"], // Ignore unnecessary folders
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Show warnings instead of errors
      "react/jsx-key": "off", // Disable React key warnings if needed
    },
  },
];

export default eslintConfig; // Export after assigning to a variable
