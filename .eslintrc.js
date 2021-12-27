// What is this file? https://eslint.org/docs/user-guide/configuring/configuration-files

module.exports = {
  root: true,
  overrides: [
    {
      // Many of the files in this repository are TypeScript files.
      files: ['**/*.ts', '**/*.tsx'],

      extends: [
        // TypeScript linting
        // https://github.com/weirdpattern/eslint-config-typescript
        'typescript',

        // Prevent misspelling of file paths and import names.
        // https://github.com/import-js/eslint-plugin-import
        'plugin:import/recommended',
        'plugin:import/typescript',

        // Turn off formatting rules that are unnecessary or might conflict with Prettier.
        // https://prettier.io/docs/en/integrating-with-linters.html
        'prettier',
      ],
      plugins: [
        // TypeScript documentation linting
        // https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/
        'eslint-plugin-tsdoc',
      ],
      rules: {
        // Enable documentation linting rules.
        'tsdoc/syntax': 'warn',
      },
    },
    {
      // The reason why some JavaScript files exist in this TypeScript repository is to configure tools such as ESLint, Jest, ...
      files: ['**/*.js'],
      extends: [
        // Start with default ESLint recommended rules.
        // https://eslint.org/docs/rules/
        'eslint:recommended',

        // Acknowledge Node.js conventions (such as using "require" and "module").
        // https://github.com/mysticatea/eslint-plugin-node
        'plugin:node/recommended',

        // Add documentation linting rules.
        // https://github.com/gajus/eslint-plugin-jsdoc
        'plugin:jsdoc/recommended',

        // Turn off formatting rules that are unnecessary or might conflict with Prettier.
        // https://prettier.io/docs/en/integrating-with-linters.html
        'prettier',
      ],
    },
  ],
}
