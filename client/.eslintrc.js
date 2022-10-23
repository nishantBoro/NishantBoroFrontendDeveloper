module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "google"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "no-cond-assign": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-function": 2,
    "no-func-assign": 2,
    "no-sparse-arrays": 2,
    "eqeqeq": 2,
    "no-eval": 2,
    "no-magic-numbers": [2, {
      "ignoreArrayIndexes": true,
      "ignore": [-1, 0, 1]
    }],
    "no-lone-blocks": 2,
    "no-redeclare": 2,
    "no-unused-expressions": 1,
    "no-useless-concat": 2,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "no-use-before-define": 1,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "new-cap": 1,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "vars-on-top": 1,
    "quotes": [2, "single", { "avoidEscape": true }]
  }
}
