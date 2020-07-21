

module.exports = {
  rules: {
    /* 상위 스코프에 정의된 변수명 사용 불가 */
    'no-shadow': 'off',

    /* 미사용 변수 선언 불가 */
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    /* 선언 이전 사용 */
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
  },
};
