
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules


module.exports = {
  rules: {
    /* 버튼 태그 type 지정 - 강제하지 않음 */
    'react/button-has-type': ['off', {
      button: true,
      submit: true,
      reset: false,
    }],

    /* defaultProps 사용 - 권장 하지만 강제하지 않음 */
    'react/default-props-match-prop-types': ['off', { allowRequiredDefaults: false }],

    /* 변수 해체 할당 - 권장하지만 강제하지 않음 */
    'react/destructuring-assignment': ['off', 'always'],

    // 공통 컴포넌트의 자동 문서화를 위해 해제
    'react/forbid-foreign-prop-types': ['off', { allowInPropTypes: true }],

    /* propTypes 선언 시 금지 대상 - array, any는 제한하지만 object는 사용성과 생산성 때문에 강제하지 않음 */
    'react/forbid-prop-types': ['warn', {
      forbid: ['any', 'array'],
      checkContextTypes: false,
      checkChildContextTypes: false,
    }],

    /* props에 boolean 타입 값 사용  */
    'react/jsx-boolean-value': ['warn', 'never', { always: [] }],

    /* jsx 중괄호 사용 여부 */
    'react/jsx-curly-brace-presence': 'off',

    /* jsx props 중괄호에 공백 사용 - 안넣는걸 권장하지만 강제하지 않음 */
    'react/jsx-curly-spacing': ['off', 'never', { allowMultiline: true }],

    /* jsx props '=' 양옆에 공백 사용 - 넣지 않음 */
    'react/jsx-equals-spacing': ['warn', 'never'],

    /* jsx가 사용된 파일 확장자 */
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],

    /* jsx 첫번째 props 줄바꿈 스타일 */
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],

    /* Fragment 사용 - 제한하지 않음 */
    'react/jsx-fragments': 'off',

    /* JSX Element 정렬 */
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],

    /* JSX 최대 들여쓰기 */
    'react/jsx-max-depth': ['warn', { max: 7 }],

    /* jsx 라인별 props 선언 */
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],

    // HTML 규칙은 강제하지 않음
    'react/jsx-no-target-blank': ['off', { enforceDynamicLinks: 'always' }],

    /* 미사용 Fragment 제거 */
    'react/jsx-no-useless-fragment': ['warn'],

    /* jsx 라인별 단일 구문 혹은 컴포넌트 사용 - 단일 구문 사용을 권장하나 제한하지 않음 */
    'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }],

    /* jsx 태그 사용시 공백 */
    'react/jsx-tag-spacing': ['warn', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    /* jsx 에서 사용하지 않는 변수 선언 */
    'react/jsx-uses-vars': 'warn',

    /* jsx 다중 라인일 때 소괄호로 감싸기 - 강제 */
    'react/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'ignore',
      logical: 'parens-new-line',
      prop: 'ignore',
    }],

    'react/no-access-state-in-setstate': ['warn'],

    /* 배열 key에 인덱스 사용 - 비권장 하지만 제한하지 않음 */
    'react/no-array-index-key': 'off',

    /* JSX prop에 children 사용 금지 */
    'react/no-children-prop': 'error',

    /* dangerouslySetInnerHTML 사용 금지 - 제한하지 않음 */
    'react/no-danger': 'off',

    /* deprecated 된 lifecycle 메소드 사용 금지 */
    'react/no-deprecated': 'error',

    /* state value 직접 할당 금지 */
    'react/no-direct-mutation-state': 'error',

    /* 한개의 파일에 여러 컴포넌트 정의 금지 */
    'react/no-multi-comp': ['warn', { ignoreStateless: true }],

    /* UNSAFE_라이프사이클 사용금지 */
    'react/no-unsafe': 'error',

    /* [미작동] 미사용 propTypes 금지 */
    'react/no-unused-prop-types': 'warn',

    /* [미작동] 미사용 state 금지 */
    'react/no-unused-state': 'warn',

    /* stateless 함수형태 사용 */
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],

    /* propTypes 정의 - 권장하지만 강제하지 않음 */
    'react/prop-types': ['off', {
      ignore: ['match', 'location', 'history', 'children'],
      customValidators: [],
      skipUndeclared: false,
    }],

    /* defaultProps 정의 - 권장하지만 강제하지 않음 */
    'react/require-default-props': ['off', { forbidDefaultForRequired: true }],

    // 여유있는 기준으로 강제
    'react/sort-comp': ['error', {
      order: [
        'reactField',
        'static-methods',
        'type-annotations',
        'instance-variables',
        'constructor',
        'lifecycle',
        // 'instance-methods',
        'everything-else',
        // '/^on.+$/',
        // 'getters',
        // 'setters',
        // '/^(get|set|is)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'rendering',
      ],
      groups: {
        reactField: [
          'displayName',
          'propTypes',
          'defaultProps',
          'contextTypes',
          'contextType',
          'context',
          'state',
        ],
        lifecycle: [
          // 'displayName',
          // 'propTypes',
          // 'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          // 'defaultProps',
          // 'state',
          // 'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],

    /* [미작동] propTypes에서 required는 처음에, 콜백(on~)은 마지막에 정의하도록 순서 제한 */
    'react/sort-prop-types': ['error', {
      ignoreCase: true,
      callbacksLast: true,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: true,
    }],

    /* [미작동] 생성자에서 state 초기화 - 금지 */
    'react/state-in-constructor': ['error', 'never'],
  },
};
