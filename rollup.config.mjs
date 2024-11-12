import { defineConfig } from 'rollup'
//import multiInput from 'rollup-plugin-multi-input'
import stylus from 'rollup-plugin-stylus'
import pug from 'rollup-plugin-pug'

export default defineConfig([
  {
    input: {
      css: 'src/css/main.styl',
    },
    output: [
      {
        //file: 'public/css/main.css',
        dir: 'public/css',
        format: 'es',
        entryFileNames: 'main.[name]',
        //preserveModules: true,
      },
    ],
    plugins: [
      //multiInput(),
      stylus(),
    ],
  },
  {
    input: {
      html: 'src/views/main.pug',
    },
    output: [
      {
        //file: 'views/main.html',
        dir: 'views',
        format: 'es',
        entryFileNames: 'main.[name]',
        //preserveModules: true,
      },
    ],
    plugins: [
      //multiInput(),
      pug(),
    ],
  },
])
