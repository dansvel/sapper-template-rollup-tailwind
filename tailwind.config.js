module.exports = {
  purge: false, // purge handle by postcss
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
