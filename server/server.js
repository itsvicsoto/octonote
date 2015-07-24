var express = require('express'),
  config = require('./config'),
  app = express();

app.get('/404', function (req, res) {
  res.send('hello world');
});

// Express Server Config
app.set('port', process.env.PORT || 5005);

// Default Application Directories that are served.
app.use('/', express.static(__dirname + config.root));
app.use('/vendor', express.static(__dirname + '/../vendor'));
app.use('/assets', express.static(__dirname + config.root + '/assets'));

app.get('*', function (req, res) {
  res.sendFile('index.html', {root: __dirname + config.root});
});

app.listen(app.get('port'), function () {
  var meta = module.exports = require('./../package.json');
  meta.banner = '\n> ExpressJSBoilerplate : ' + meta.version;
  meta.banner += '\n> -------------------------------------------------- ';
  meta.banner += '\n> ' + meta.description;
  meta.banner += '\n> Running on localhost:' + app.get('port') + '\n';

  console.log(meta.banner);
});
