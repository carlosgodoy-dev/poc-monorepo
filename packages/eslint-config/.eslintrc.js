module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "standard",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier/standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-submodule-imports": "off",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/jsx-no-lambda": "off",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/camelcase": "off",
        "simple-import-sort/sort": "warn",
        "no-console": "off",
        "sort-keys": "off",
        "sort-imports": "off"
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
};
