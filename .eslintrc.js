module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'standard',
    ],
    plugins: [
        'vue'
    ],
    rules: {
        camelcase: 1,
        indent: [2, 4],
        "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
        "vue/html-indent": ["error", 4,]

    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off"
            }
        }
    ]
}
