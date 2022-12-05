const path = require('path')

module.exports = {
  entry: './content.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'content.bundle.js'
  },
  externals: {
    'tesseract.js': 'tesseract.js'
  }
}
