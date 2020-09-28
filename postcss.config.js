const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const tailwindCSS = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
    plugins: [
        postcssImport,
        tailwindCSS(),
        postcssPresetEnv({
            features: {
                // https://github.com/tailwindcss/tailwindcss/issues/1190
                'focus-within-pseudo-class': false,
                'nesting-rules': true, // delete if you don’t want nesting (optional)
            },
        }),
        production && purgecss ({
            content: [
                './**/**/*.html',
                './**/**/*.svelte'
            ],
            whitelistPatterns: [/svelte-/],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        production && cssnano({
            preset: [
                'default',
                {discardComments: {removeAll: true}},
            ],
        }),
    ].filter(Boolean)
}