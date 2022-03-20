// module.exports = {
//   ignorePatterns: ["/*.*", "build/*", "ci/*", "node_modules/**"],
//   extends: [
//     require.resolve("@ctie/code-specification-unid/config/vue2/eslintrc.js"),
//   ],
//   rules: {},
//   env: {
//     node: true,
//     browser: true,
//   }
// };

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "filename", "sonarjs"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "filename/match": [2, "kebab-case"],
    "vue/multi-word-component-names": [0]
  },
};
