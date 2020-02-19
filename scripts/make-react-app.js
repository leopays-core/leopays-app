#!/usr/bin/env node
// scripts/make-react-app.js
const fs = require('fs');
const { exec } = require('child_process');
const findRemoveSync = require('find-remove');
const meta = require('../package');
const { zipDirectory } = require('./archiver');


const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('build [options]',
    'building react-app', (yargs) => { }, cmdBuild)
  .command('release [options]',
    'releasing react-app', (yargs) => { }, cmdRelease)
  .command('auto-release [options]',
    'auto releasing react-app', (yargs) => { }, cmdAutoRelease)
  .options({
    'verbose': { describe: 'verbose', alias: 'v', default: false },
    'source': { describe: 'source', type: 'string', default: 'build' },
    'destination': { describe: 'destination', type: 'string', default: 'release' },
    'name': { describe: 'name', type: 'string', default: 'react-app' },
  })
  .help()
  .argv;


function cmdBuild(argv) {
  if (argv.verbose)
    console.log('building');
  return new Promise((resolve, reject) => {
    if (argv.verbose)
      console.log('building ...');
    const cmd = 'react-scripts build';
    const opts = {};
    return exec(cmd, opts, (error = null, stdout, stderr) => {
      if (error) {
        if (error && argv.verbose)
          console.error('building ... error:', error);
        return reject(error);
      } else {
        if (argv.verbose)
          console.log('building ... Ok');
        return resolve(argv);
      }
    });
  });
}

function replaceFiles(argv) {
  if (!fs.existsSync(`${argv.source}/${argv.name}/`)) {
    const files = fs.readdirSync(`${argv.source}`);
    if (argv.verbose)
      console.log(`Files in The dir:`, files);

    fs.mkdirSync(`${argv.source}/${argv.name}/`);
    if (argv.verbose)
      console.log(`The dir '${argv.source}/${argv.name}/' maked.`);

    for (i in files) {
      fs.renameSync(`${argv.source}/${files[i]}`, `${argv.source}/${argv.name}/${files[i]}`);
    }
    if (argv.verbose)
      console.log(`Files replaced`);
  } else {
    const msg = `THE DIR alredy exists ${argv.source}/${argv.name}/`;
    if (argv.verbose)
      console.error('releasing ... error:', error);
    return reject(msg);
  }
}

function cleanFiles(argv) {
  /*
  const removed = findRemoveSync(`${argv.source}/${argv.name}/`, { extensions: ['.map'] });
  if (argv.verbose)
    console.log(`Removed files:`, removed);
  */

  const assetManifestFile = `${argv.source}/${argv.name}/asset-manifest.json`;
  let am = JSON.parse(fs.readFileSync(assetManifestFile, 'utf8'));
  for (i in am.files) {
    if (i.endsWith('.map')) {
      am.files[i] = undefined;
      if (argv.verbose)
        console.log(`Removed field in asset-manifest.json:`, i);
    }
  }
  am = JSON.stringify(am);
  fs.writeFileSync(assetManifestFile, am);

  const manifestFile = `${argv.source}/${argv.name}/manifest.json`;
  const m = JSON.stringify(JSON.parse(fs.readFileSync(manifestFile, 'utf8')));
  fs.writeFileSync(manifestFile, m);
}

function cmdRelease(argv) {
  if (argv.verbose)
    console.log('releasing');
  return new Promise((resolve, reject) => {
    if (argv.verbose)
      console.log('releasing ...');
    replaceFiles(argv);

    // *.zip
    const zipName = `release/${argv.name}-v${meta.version}.zip`;
    return zipDirectory(`${argv.source}/${argv.name}/`, zipName)
      .then(() => {
        if (argv.verbose)
          console.log(`Maked *.zip file:`, zipName);
        cleanFiles(argv);

        const cmd = 'yarn run rollup:react-app';
        const opts = {};
        return exec(cmd, opts, (error = null, stdout, stderr) => {
          if (error) {
            if (error && argv.verbose)
              console.error('rollup:react-app ... error:', error);
            return reject(error);
          }
          if (argv.verbose)
            console.log('rollup:react-app ... Ok');

          // *.min.zip
          const zipMinName = `release/${argv.name}-v${meta.version}.min.zip`;
          return zipDirectory(`${argv.source}/${argv.name}/`, zipMinName)
            .then(() => {
              if (argv.verbose) {
                console.log(`Maked *.min.zip file:`, zipMinName);
                console.log('releasing ... Ok');
              }
              return resolve(argv);
            })
        });
      })
  });
}


function cmdAutoRelease(argv) {
  if (argv.verbose)
    console.log('auto releasing');
  return cmdBuild(argv)
    .then(cmdRelease)
    .then(() => {
      if (argv.verbose)
        console.log('auto releasing ... Ok');
    });
}
