

module.exports = {
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
  // 룰 검토 완료
  rules: {
    // alias 사용으로 인해 off
    'import/extensions': 'off',

    // import 구문 후에는 두줄 공백
    'import/newline-after-import': ['error', { count: 2 }],

    // mes-shared에서 가져오는 공용 라이브러리때문에 강제하지 않음
    'import/no-extraneous-dependencies': 'off',

    // export 형태 강제하지 않음
    'import/no-named-as-default': 'off',

    // export 형태 강제하지 않음
    'import/no-named-as-default-member': 'off',

    // import * as all 미사용
    'import/no-namespace': 'error',

    // 존재하지 않는 모듈 사용 체크 TODO: ignore 목록 추가
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['\@nara', '\@/', '\@resource', '\-shared', '\-loader', 'resource'] }],

    // 소스코드 (뷰어용) import 때문에 제한하지 않음
    'import/no-webpack-loader-syntax': 'off',

    // export 형태 강제하지 않음
    'import/prefer-default-export': 'off',
  },
};
