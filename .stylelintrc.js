// module.exports = {
//   extends: [
//     require.resolve("@ctie/code-specification-unid/config/vue2/stylelintrc.js"),
//   ],
//   rules: {
//     // your rules
//   },
// };

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-rational-order",
    "stylelint-config-html",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
    "stylelint-no-unsupported-browser-features",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
        ignore: ["rem"],
      },
    ],
    "plugin/declaration-block-no-ignored-properties": true,
  },
};

