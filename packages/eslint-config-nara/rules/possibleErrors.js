

module.exports = {
  rules: {
    /* console 사용 불가 */
    'no-console': 'off',

    /* debugger 사용 불가 - 빌드에 포함되지 않도록 경고 */
    'no-debugger': 'warn',

    /* 객체를 통합 프로토타입 접근 금지 */
    'no-prototype-builtins': 'off',
  },
};
