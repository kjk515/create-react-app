

module.exports = {
  rules: {
    /* Array 순회 api에서 리턴 사용 - 강제하지 않음, map은 forEach 대용으로도 많이 사용하기 때문 */
    'array-callback-return': ['off', { allowImplicit: true }],

    /* this를 사용하지 않는 메소드는 static으로 선언 - 클래스 메소드와 객체 메소드를 목적에 따라 사용하도록 제한하지 않음 */
    'class-methods-use-this': ['off', {
      exceptMethods: [
        'componentDidMount',
        'shouldComponentUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'render',
      ],
    }],

    /* 구문 사용 시 바디 사용 - 항상 사용 (단일 라인 금지) */
    curly: ['error', 'all'],

    /* alert 사용 불가 */
    'no-alert': 'off',

    /* switch case 문 안에서 변수 선언 시 블록 사용 */
    'no-case-declarations': 'warn',

    /* else에서 리턴 사용 불가 */
    'no-else-return': 'off',
    // TODO: no-multi-spaces 할 차례

    /* 두칸 공백 사용 불가 */
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
      exceptions: {
        Property: false,
      },
    }],

    /* 함수 매개변수 값 재할당 불가 */
    'no-param-reassign': ['off', { props: false }],

    /* 리턴 구문에서 변수 할당 불가  */
    'no-return-assign': ['off', 'always'],

    /* parseInt 사용 시 기수 지정 */
    radix: 'warn',
  },
};
