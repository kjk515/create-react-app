

module.exports = {
  rules: {
    /* arrow-function 바디 스타일 */
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],

    /* arrow-function 매개변수 괄호 */
    'arrow-parens': 'off',
    // 'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],

    /* arrow-function 화살표 앞뒤 공백 */
    'arrow-spacing': ['warn', { before: true, after: true }],

    /* 객체 분해 문법 사용 */
    'prefer-destructuring': 'off',

    /* 템플릿 문자열 문법 사용 */
    'prefer-template': 'off',

    /* 템플릿 문자열 변수괄호 공백 사용 */
    'template-curly-spacing': 'off',
  },
};
