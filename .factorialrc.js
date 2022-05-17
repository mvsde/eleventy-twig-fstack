const css = require('@factorial/stack-css')
const javascript = require('@factorial/stack-javascript')

module.exports = {
  use: [
    css,
    javascript
  ],

  rootFolder: 'src',
  cssFiles: ['css/index.css'],
  jsFiles: ['js/index.js'],
  distFolder: 'dist/assets'
}
