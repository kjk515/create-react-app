
// https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules


module.exports = {
  rules: {
    /* alt 정의 - 강제하지 않음 */
    'jsx-a11y/alt-text': ['off', {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
    }],

    /* 빈 Anchor(a) 태크 금지 */
    'jsx-a11y/anchor-has-content': ['warn', { components: [] }],

    /* Anchor 태크 href 유효성 체크 - 하지 않음 */
    'jsx-a11y/anchor-is-valid': ['off', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],

    /* aria-activedescendant 에 tabIndex 명시 - 강제하지 않음 */
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',

    /* 클릭 이벤트 정의시 키 이벤트 핸들러도 정의 - 강제하지 않음 */
    'jsx-a11y/click-events-have-key-events': 'off',

    /* alt 사용시 내용 체크 - 강제하지 않음 */
    'jsx-a11y/img-redundant-alt': 'off',

    /* label에 작동 될 엘리먼트 연결 - 강제하지 않음 */
    'jsx-a11y/label-has-associated-control': ['off', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'both',
      depth: 25
    }],

    /* label 태그 htmlFor 사용 */
    'jsx-a11y/label-has-for': ['off', {
      components: [],
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: false,
    }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/mouse-events-have-key-events': 'off',

    // autofocus 사용 제한하지 않음
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['off', {
      tr: ['none', 'presentation'],
    }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/no-noninteractive-element-interactions': ['off', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['off', {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/no-noninteractive-tabindex': ['off', {
      tags: [],
      roles: ['tabpanel'],
    }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/no-redundant-roles': 'off',

    // HTML에 대해 강제하지 않음
    'jsx-a11y/no-static-element-interactions': ['off', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],

    // HTML에 대해 강제하지 않음
    'jsx-a11y/role-has-required-aria-props': 'off',

    // HTML에 대해 강제하지 않음
    'jsx-a11y/role-supports-aria-props': 'off',

    // HTML에 대해 강제하지 않음
    'jsx-a11y/tabindex-no-positive': 'off',
  },
};
