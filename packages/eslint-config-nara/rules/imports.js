
// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules


module.exports = {
  rules: {
    /* import 구문 유효성 체크 - alias 사용으로 인해 off */
    'import/extensions': 'off',

    /* import 구문 후 라인공백 */
    'import/newline-after-import': ['warn', { count: 2 }],

    /* 관련없는 디펜던시 포함 불가 */
    'import/no-extraneous-dependencies': 'off',

    /* import 시 named로 export 된 이름을 default import 된 객체 속성으로 사용 불가 */
    'import/no-named-as-default-member': 'off',

    /* default import 시 named로 export 된 이름 사용 불가  */
    'import/no-named-as-default': 'off',

    /* import * as 사용 불가 */
    'import/no-namespace': 'off',

    /* 정의되지 않은 모듈 사용 불가 - typescript 사용으로 인해 off */
    'import/no-unresolved': ['off', {
      commonjs: true,
      caseSensitive: true,
      ignore: ['\@nara', '\@/', '\@resource', '\-shared', '\-loader', 'resource', '~'],
    }],

    /* webpack 로더 문법 사용 불가 - 소스코드 import 때문에 제한하지 않음 */
    'import/no-webpack-loader-syntax': 'off',

    /* default export 항상 사용 */
    'import/prefer-default-export': 'off',
  },
};
