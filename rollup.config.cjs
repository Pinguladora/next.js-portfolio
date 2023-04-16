const globImport = require('rollup-plugin-glob-import');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    globImport({
      // format: 'esm',
      include: 'public/images/**/*.{svg,png,jpg,jpeg}',
      output: 'public/images/index.js'
    })
  ]
};
