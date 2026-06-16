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
        "vue/max-attributes-per-line": ["error", {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        }],
        "ts/no-redeclare": ["off"],
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": ["warn"],
        "antfu/no-top-level-await": ["off"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        // trustPolicy: no-downgrade flags chokidar/semver as takeovers and breaks install
        "pnpm/yaml-enforce-settings": ["off"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfig: {
              rootDir: ".",
            },
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
