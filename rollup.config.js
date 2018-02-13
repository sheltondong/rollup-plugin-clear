import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import commonjs from 'rollup-plugin-commonjs';

const config = {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [
    // rollup-plugin-node-resolve
    resolve(),
    // rollup-plugin-typescript2
    typescript(),
    // rollup-plugin-filesize
    filesize(),
    // rollup-plugin-progress
    progress(),
    // rollup-plugin-commonjs
    commonjs(),
    // rollup-plugin-alias
  ],
  external: Object.keys(require('./package.json').dependencies)
};

export default config;