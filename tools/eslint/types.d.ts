/**
 * Since the ecosystem hasn't fully migrated to ESLint's new FlatConfig system yet,
 * we "need" to type some of the plugins manually :(
 */

declare module 'eslint-plugin-import' {
  import type { Linter, Rule } from 'eslint'

  export const flatConfigs: {
    recommended: { rules: Linter.RulesRecord }
  }
  export const rules: Record<string, Rule.RuleModule>
}

declare module 'eslint-plugin-react' {
  import type { Linter, Rule } from 'eslint'

  export const configs: {
    flat: {
      recommended: { rules: Linter.RulesRecord }
      all: { rules: Linter.RulesRecord }
      'jsx-runtime': { rules: Linter.RulesRecord }
    }
  }
  export const rules: Record<string, Rule.RuleModule>
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { Linter, Rule } from 'eslint'

  export const flatConfigs: {
    recommended: { rules: Linter.RulesRecord }
    strict: { rules: Linter.RulesRecord }
  }
  export const rules: Record<string, Rule.RuleModule>
}

declare module 'eslint-plugin-react-hooks' {
  import type { Linter, Rule } from 'eslint'

  export const configs: {
    'recommended-latest': {
      rules: {
        'rules-of-hooks': Linter.RuleEntry
        'exhaustive-deps': Linter.RuleEntry
      }
    }
  }
  export const rules: Record<string, Rule.RuleModule>
}

declare module '@next/eslint-plugin-next' {
  import type { Linter, Rule } from 'eslint'

  export const flatConfig: {
    recommended: { rules: Linter.RulesRecord }
    coreWebVitals: { rules: Linter.RulesRecord }
  }
  export const rules: Record<string, Rule.RuleModule>
}
