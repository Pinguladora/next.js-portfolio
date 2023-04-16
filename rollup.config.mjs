import globImport from 'rollup-plugin-glob-import';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/pages/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    globImport({
      // format: 'esm',
      include: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],
      output: 'public/images/index.js'
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react']
    })
  ]
};
