module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/self-closing-comp": [
          "error",
          {
            "component": true,
            "html": true
          }
        ],
        "no-debugger": "warn"
    }
}
