const { series, parallel } = require('gulp'),
      { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app'),
      { servidor, monitorarArquivos } = require('./gulpTasks/servidor')
      
exports.default = series(
    parallel(appHTML, appCSS, appJS, appIMG),
    servidor,
    monitorarArquivos
)

