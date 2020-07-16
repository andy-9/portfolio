module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        // indent: ['error', 4]
        // 'max-lines': ['error', 150],
        'max-lines-per-function': ['error', 20],
        'max-len': ['off', { code: 130, tabWidth: 2 }],
        'max-statements': ['error', 10],
        'max-statements-per-line': ['error', { max: 2 }],
        'max-params': ['error', 3],
        'max-nested-callbacks': ['error', 4],
        'max-depth': ['error', 2],
        complexity: ['error', 5]
    }
}
