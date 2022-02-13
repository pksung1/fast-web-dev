module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [1,
            {
                "extensions": [
                ".tsx"
                ]
            }
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"]
    },
    "overrides": [
        {
          "files": ["src/*.ts", "src/*.tsx"],
          "excludedFiles": "*.test.js",    
        }
    ],
    "ignorePatterns": ["/dist", ".eslintrc.js", "/webpack", "webpack.config.js"]
};
