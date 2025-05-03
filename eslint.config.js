// @ts-check
import antfu from "@antfu/eslint-config";
import packageJson from "eslint-plugin-package-json";

import withNuxt from "./.nuxt/eslint.config.mjs";

// TODO: add tailwindcss plugin

export default withNuxt(
  packageJson.configs.recommended,
  antfu(
    {
      type: "app",
      vue: {
        a11y: true,
      },
      typescript: true,
      formatters: true,
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
      ignores: ["**/migrations/**"],
    },
    {
      rules: {
        "ts/no-redeclare": ["off"],
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": ["warn"],
        "antfu/no-top-level-await": ["off"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfigRootDir: ".",
          },
        ],
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: ["README.md"],
          },
        ],
      },
    },
    {
      files: ["package.json"],
      rules: {
        "jsonc/sort-keys": ["off"],
      },
    },
  ),
);
