module.exports = {
  purge: {
      mode: 'all',
      content: [
          './src/**/*.svelte',
          './src/**/*.html'
      ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}
