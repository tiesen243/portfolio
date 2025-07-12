import reactPlugin from '@eslint-react/eslint-plugin'
import a11yPlugin from 'eslint-plugin-jsx-a11y'
import hooksPlugin from 'eslint-plugin-react-hooks'

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      ...reactPlugin.configs['recommended-typescript'].plugins,
      'react-hooks': hooksPlugin,
      'jsx-a11y': a11yPlugin,
    },
    rules: {
      ...reactPlugin.configs['recommended-typescript'].rules,
      ...hooksPlugin.configs['recommended-latest'].rules,
      ...a11yPlugin.flatConfigs.strict.rules,

      '@eslint-react/naming-convention/component-name': [
        'warn',
        { rule: 'PascalCase', allowAllCaps: true },
      ],
      '@eslint-react/naming-convention/filename': ['warn', 'kebab-case'],
      '@eslint-react/naming-convention/filename-extension': [
        'warn',
        'as-needed',
      ],
    },
    settings: reactPlugin.configs['recommended-typescript'].settings,
  },
]
