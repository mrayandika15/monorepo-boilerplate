module.exports = {
  printWidth: 80,
  tabWidth: 4,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@repo/(.*)$",
    "^@/app/(.*)$",
    "^@/shared/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ["tv"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
