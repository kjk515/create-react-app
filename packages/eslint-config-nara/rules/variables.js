

module.exports = {
  rules: {
    /* 상위 스코프에 정의된 변수명 사용 불가 */
    'no-shadow': 'off',

    /* 미사용 변수 선언 불가 */
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    /* 변수 선언 후 라인 공백 */
    'padding-line-between-statements': ['warn',
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
    ],
  },
};
