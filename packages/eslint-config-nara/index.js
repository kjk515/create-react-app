

module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  // "plugins": ["react", "prettier"],
  "plugins": ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks', 'babel'],
  "extends": [
    "airbnb",
    "./rules/possibleErrors.js",
    "./rules/bestPractices.js",
    "./rules/variables.js",
    "./rules/stylisticIssues.js",
    "./rules/ecmaScript6.js",
    "./rules/imports.js",
    "./rules/react.js",
    "./rules/jsx.js",
    "./rules/babel.js",
  ],
  "rules": {
    // "prettier/prettier": "error"
  },
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },

      // typescript-eslint specific options
      warnOnUnsupportedTypeScriptVersion: true,
    },
    plugins: ['@typescript-eslint'],
    // If adding a typescript-eslint version of an existing ESLint rule,
    // make sure to disable the ESLint rule here.
    rules: {
      // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
      'default-case': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
      'no-dupe-class-members': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
      'no-undef': 'off',

      // Add TypeScript specific rules (and turn off ESLint equivalents)
      // '@typescript-eslint/no-angle-bracket-type-assertion': 'warn',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-namespace': 'error',

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'warn',
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],

      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      'import/no-unresolved': 'off',

      // Add to
      /* type, interface 선언 시 속성 구분 기호 */
      '@typescript-eslint/member-delimiter-style': ['warn', {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }],

      /* 타입(클래스, 인터페이스 등) 정의 시 속성 순서 */
      '@typescript-eslint/member-ordering': ['warn', {
        "default": [
          // Index signature
          "signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "field",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",

          "public-method",
          "protected-method",
          "private-method",
        ]
      }],

      /* (버전업 필요) 타입 선언시 네이밍 규칙 */
      // '@typescript-eslint/naming-convention': ['error', { format: 'PascalCase' }]

      /* 빈 인터페이스 정의 */
      '@typescript-eslint/no-empty-interface': ['warn'],

      /* (버전업 필요) 이중 세미콜론 사용 금지 */
      // '@typescript-eslint/no-extra-semi': ['error'],


      /* (버전업 필요) 함수 소괄호 이전 공백 */
      // 'space-before-function-paren': "off",
      // '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

      /* 타입 선언 시 공백 스타일 */
      '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, overrides: {
          arrow: { before: true, after: true }
        }}]
    },
  }],
};
