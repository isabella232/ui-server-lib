module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ["@grail/eslint-config-grail/src/back-end", "@grail/eslint-config-grail/src/flow"],
  plugins: ["flowtype", "import", "filenames"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "lodash",
            message: 'Please import lodash functions directly, eg: import isEmpty from "lodash/isEmpty".',
          },
          {
            name: "@grail/components",
            message: "Please do not import @grail/components from @grail/server-lib.",
          },
        ],
        patterns: ["@grail/server-lib/src/*"],
      },
    ],
  },
};