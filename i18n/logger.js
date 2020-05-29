import debug from 'debug';



export default {
  type: 'logger',

  log: (args) => { debug('app:i18n:log')(args.shift(), args); },
  warn: (args) => { debug('appi18n:warn')(args.shift(), args); },
  error: (args) => { debug('app:i18n:error')(args.shift(), args); },
}
