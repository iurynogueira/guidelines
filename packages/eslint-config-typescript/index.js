module.exports = {
  extends: [
    '@quero/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { 'selector': 'typeLike', 'format': ['PascalCase'] },
      { 'selector': 'variableLike', 'format': ['camelCase', 'UPPER_CASE'] },
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': { 'regex': '^I[A-Z]', 'match': true },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', {
      'allowNumber': true,
      'allowBoolean': false,
      'allowAny': true,
      'allowNullish': false,
      'allowRegExp': false,
    }],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'complexity': 'warn',
    'constructor-super': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'max-classes-per-file': [
      'error',
      1,
    ],
    'new-parens': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-labels': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'valid-typeof': 'off',
    'use-isnan': 'error',

    // these rules conflicts with eslint-base, we are extending with TS implementation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],
    'indent': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // Decorator parameter bug: #4036, #1232, #640
    '@typescript-eslint/indent': 'off',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [ 'error', { 'after': true, 'before': true }],
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { 'vars': 'all', 'args': 'all', 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true },
    ],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': ['block-like', 'multiline-expression'] },
      { 'blankLine': 'always', 'prev': ['block-like', 'multiline-expression'], 'next': '*' },
    ],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error'],
  },
};
