

module.exports = {
  rules: {
    /* 배열 대괄호 공백 */
    'array-bracket-spacing': 'off',

    /* 블록 공백 */
    'block-spacing': ['warn', 'always'],

    /* 중괄호 스타일 */
    'brace-style': ['warn', 'stroustrup'],

    /* 변수 선언 시 낙타표기법 사용 */
    camelcase: ['error', { properties: 'never' }],

    /* 속성 선언 시 마지막 쉼표 사용 - 멀티라인에서 마지막 쉼표를 항상 넣는다 */
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    /* 콤마 표기 시 공백 */
    'comma-spacing': ['error', { before: false, after: true }],

    /* 콤마 사용 스타일 */
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    /* 동적 프로퍼티 사용 시 공백 */
    'computed-property-spacing': 'off',

    /* 파일의 마지막에 EndOfLine 사용 */
    'eol-last': ['warn', 'always'],

    /* 함수 사용 시 매개변수 - 시작부와 종료부의 일관된 사용 */
    'function-paren-newline': ['off', 'consistent'],

    /* 함수 호출 시 공백 사용 - 사용 불가 */
    'func-call-spacing': ['error', 'never'],

    /* arrow-function 줄바꿈 스타일 */
    'implicit-arrow-linebreak': ['off', 'beside'],

    /* 속성 선언 시 공백 스타일 */
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    /* 키워드 사용시 공백 */
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],

    /* 줄바꿈 문자 지정 */
    'linebreak-style': 'off',

    /* 클래스 속성 사이의 줄바꿈 - 클래스 속성은 사이에 라인을 넣지만, 단일라인은 예외 */
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    /* 라인당 최대 문자사이즈 */
    'max-len': ['warn', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    /* new 사용시 네이밍 규칙 */
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    /* 체이닝 호출 시 줄바꿈 */
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

    /* else 구문에서 리턴 사용 */
    'no-else-return': 'off',

    /* 연산자 혼합 사용 - 혼란스러울 수 있는 연산자에 대해 괄호없이 사용하는것을 제한한다. */
    'no-mixed-operators': ['error', {
      // the list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    /* 다중 라인공백 */
    'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1, maxBOF: 2 }],

    /* ++(--) 연산자 사용 금지 */
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    /* 세미콜론 이후 공백 금지 */
    'no-trailing-spaces': ['warn', { skipBlankLines: true, ignoreComments: false }],

    /* 언더스코어(_) 사용 금지 */
    'no-underscore-dangle': 'off',

    /* 불필요한 3항 연산자 금지 */
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],

    /* 속성 접근(닷 연산자) 시 공백 사용 */
    'no-whitespace-before-property': 'warn',

    /* 바디 없는 구문 선언 시 바디 위치 - curly 를 all로 사용하기 때문에 미사용 (단일 라인 금지) */
    'nonblock-statement-body-position': ['off', 'beside', { overrides: {} }],

    /* 객체 리터럴에서 괄호 줄바꿈 */
    'object-curly-newline': ['warn', {
      ObjectExpression: { minProperties: 10, consistent: true },
      ObjectPattern: { minProperties: 10, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 10, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 10, multiline: true, consistent: true },
    }],

    /* 객체 리터럴 괄호 공백 */
    'object-curly-spacing': ['warn', 'always', { arraysInObjects: false, objectsInObjects: false }],

    /* 객체 리터럴 속성 줄바꿈 - 형식을 제한하지 않음 */
    'object-property-newline': ['off', { allowAllPropertiesOnSameLine: false }],

    /* 변수 선언시 하나의 구문에 여러 변수 선언 - 금지 */
    'one-var': ['error', 'never'],

    /* 연사자 줄바꿈 - 연산자 앞에서 한다. */
    'operator-linebreak': ['warn', 'before', { overrides: {
        '=': 'none',
        '?': 'after',
        ':': 'ignore',
      }}],

    /* 블록 사용시 라인공백 감싸기 */
    'padded-blocks': 'off',

    /* 변수 선언 후 라인 공백 */
    'padding-line-between-statements': ['warn',
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var", "return", "export"]},
    ],

    /* 객체 속성 선언시 따옴표 사용 */
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    /* 문자열 따옴표 사용 - 기본으로 홑따옴표를 사용하되 템플릿 리터럴 사용도 허용한다. */
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    /* 세미콜론 - 항상 사용 */
    semi: ['error', 'always'],

    /* 블럭 이전에 공백 사용 */
    'space-before-blocks': 'error',

    /* 함수 정의 시 소괄호(매개변수) 전에 공백 사용 */
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

    /* 주석 공백 사용 - 제한하지 않는다. */
    'spaced-comment': ['off', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      }
    }],

    /* 함수 호출 시 소괄호 시작/끝에 공백 사용 */
    'space-in-parens': 'off',

    /* 연산자 사용 시 공백 사용 */
    'space-infix-ops': 'warn',
  },
};
