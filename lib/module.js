const { resolve } = require('path')

module.exports = function fontLoading (moduleOptions) {
  let options = this.options['font-loading'] || moduleOptions

  options.fontFamily = options.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  options.fontName = options.fontName || 'Default'
  options.fontPath = options.fontPath || undefined

  options.fontOptions = options.fontOptions || {
    style: 'normal',
    weight: '400'
  }

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'font-loading.js',
    options,
    ssr: false
  })
}

module.exports.meta = require('./../package.json')
