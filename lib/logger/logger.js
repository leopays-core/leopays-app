const debug = require('debug');



if (process.env.NODE_ENV === 'production') {
  debug.disable();
}


const log = debug('app');


class Logger {
  constructor(name) {
    if (name === undefined)
      this._log = log.extend('logger');
    else
      this._log = log.extend(name);
    this._fatal = this._log.extend('fatal');
    this._error = this._log.extend('error');
    this._warn = this._log.extend('warn');
    this._info = this._log.extend('info');
    this._debug = this._log.extend('debug');
    this._trace = this._log.extend('trace');

    this._render = this._log.extend('render');

    if (debug.enabled) {
      // do stuff...
    }
  }


  log(data = '') {
    if (this._log.enabled) {
      // do stuff...
    }
    this._log(data);
    return this;
  }

  fatal(data = '') {
    if (this._fatal.enabled) {
      // do stuff...
    }
    this._fatal(data);
    return this;
  }

  error(data = '') {
    if (this._error.enabled) {
      // do stuff...
    }
    this._error(data);
    return this;
  }

  warn(data = '') {
    if (this._warn.enabled) {
      // do stuff...
    }
    this._warn(data);
    return this;
  }

  info(data = '') {
    if (this._info.enabled) {
      // do stuff...
    }
    this._info(data);
    return this;
  }

  debug(data = '') {
    if (this._debug.enabled) {
      // do stuff...
    }
    this._debug(data);
    return this;
  }

  trace(data = '') {
    if (this._trace.enabled) {
      // do stuff...
    }
    this._trace(data);
    return this;
  }

  render(data = '') {
    if (this._render.enabled) {
      // do stuff...
    }
    this._render(data);
    return this;
  }
}

module.exports = Logger;
