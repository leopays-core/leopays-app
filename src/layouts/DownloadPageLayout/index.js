if (process.env.NODE_ENV === 'production') {
  module.exports = require('./DownloadPageLayout.prod');
} else {
  module.exports = require('./DownloadPageLayout.dev');
}
