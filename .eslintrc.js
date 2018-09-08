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
        "vue/script-indent": ["error", 2, { "baseIndent": 1 }],
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
