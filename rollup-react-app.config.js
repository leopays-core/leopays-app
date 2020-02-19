//precache-manifest.60f67932e297f407f0f76c4f3987452e.js

//import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
//import typeScript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import html from 'rollup-plugin-html';
//import json from 'rollup-plugin-json';
import multiEntry from "rollup-plugin-multi-entry";
import visualizer from 'rollup-plugin-visualizer';
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { terser } from 'rollup-plugin-terser';


const isProduction = process.env.NODE_ENV === 'production';
const visualizerOptions = {
  filename: 'release/stats.html',
  title: 'React WEB App - Rollup Visualizer',
  sourcemap: false,
  open: false,
};
const getPlugins = async (options) => [
  //nodeResolve(), 
  commonJs(),
  postcss(),
  html(),
  //json(),
  //typeScript({ tsconfig: 'tsconfig.json' }), 
  sizeSnapshot(),
  visualizer(visualizerOptions),
  multiEntry(),
  myExample(),
  isProduction && await terser(),
];

function myExample() {
  let src = '';
  return {
    name: 'my-example', // this name will show up in warnings and errors
    resolveId(source) {
      //console.log('resolveId, source', source)
      src = source;
      if (source === 'virtual-module') {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load(id) {
      //console.log('load id', id)
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    },
    options(options) {
      //console.log('options', options)
      return null; // other ids should be handled as usually
    },
    outputOptions(outputOptions) {
      //console.log('outputOptions', outputOptions)
      if (outputOptions.file === '[name].js')
        outputOptions.file = src;
      return null; // other ids should be handled as usually
    },
  };
}

export default (async () => ([
  {
    input: 'build/react-app/precache-manifest.*.js',
    output: { file: '[name].js', format: 'cjs', compact: true, },
    plugins: (await getPlugins()),
  }, {
    input: 'build/react-app/service-worker.js',
    output: {
      file: 'build/react-app/service-worker.js',
      format: 'cjs',//'cjs',
      name: 'Preload',
      // advanced output options
      compact: true,
    },
    plugins: (await getPlugins()),
  }
]))();
