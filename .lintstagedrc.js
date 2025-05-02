// @ts-check
/** @type {import("lint-staged").Configuration} */
export default {
  // Type check TypeScript files
  "*.(js|jsx|ts|tsx)": () => "pnpm typecheck",
  // Lint/Format files
  "*": () => "pnpm lint",
};
