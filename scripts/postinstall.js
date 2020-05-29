#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


console.log("patching './node_modules/connected-react-router/lib/structure/immutable/index.js'")
fs.copyFileSync(
  path.resolve(__dirname, './structure_immutable.js'),
  path.resolve(__dirname, '../node_modules/connected-react-router/lib/structure/immutable/index.js')
);
console.log('Ok.');
