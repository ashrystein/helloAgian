module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript'
  ],
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', '.']
      }
    }
  },
  rules: {
    'no-unused-vars': 2,
    'react-native/no-inline-styles': 2,
    semi: [2, 'never'],
    'no-extra-semi': 2,
    'comma-dangle': [2, 'never'],
    'no-shadow': 2,
    'no-constant-condition': 2,
    'prefer-const': 2,
    'import/no-unresolved': 2,
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      2,
      {
        'newlines-between': 'always-and-inside-groups',
        groups: ['builtin', 'external', 'index', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '../Themes',
            group: 'sibling'
          },
          {
            pattern: '../Themes/**',
            group: 'sibling'
          },
          {
            pattern: 'App/Themes',
            group: 'sibling'
          },
          {
            pattern: 'App/Themes/**',
            group: 'sibling'
          }
        ]
      }
    ],
    'import/named': 2,
    'import/default': 2,
    'import/no-dynamic-require': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/export': 2,
    'import/no-named-as-default-member': 2,
    'import/first': 2,
    'import/exports-last': 2,
    'import/no-duplicates': 2,
    'import/newline-after-import': [
      2,
      {
        count: 1
      }
    ],
    'import/prefer-default-export': 1,
    'import/no-anonymous-default-export': 1,
    'react/prop-types': 2,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'static-methods',
          'lifecycle',
          'eventHandlers',
          'getMethods',
          'everything-else',
          'rendering'
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
          eventHandlers: ['/^on.+$/'],
          getMethods: ['/^get.+$/']
        }
      }
    ],
    'react-hooks/rules-of-hooks': 'error'
  },
  env: {
    jest: true
  }
}
