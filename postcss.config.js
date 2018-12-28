// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 720,
      viewportHeight: 1280,
      unitPrecision: 5,
      viewportUnit: 'vw',
      fontViewportUnit: 'vmin',
      selectorBlackList: ['px'],
      minPixelValue: 1,
      mediaQuery: true
    }
  }
}
