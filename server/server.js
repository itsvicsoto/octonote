var express = require('express');
var config = require('./config');
var app = express();
var oauthGithub = require('./oauth-github');

var githubOAuth = require('github-oauth')(config.githubConfig);

githubOAuth.on('error', function (err) {
  console.error('there was a login error', err)
});

githubOAuth.on('token', function (token, res) {
  console.log('here is your shiny new github oauth token', token);
  console.log('serverResponse', token);
  // TODO save to cookies for angular access on login
  oauthGithub.setAuthenticationCookies(token, res);
});

app.get('/404', function (req, res) {
  res.send('hello world');
});

// Express Server Config
app.set('port', process.env.PORT || 5005);

// Default Application Directories that are served.
app.use('/', express.static(__dirname + config.root));
app.use('/vendor', express.static(__dirname + '/../vendor'));
app.use('/assets', express.static(__dirname + config.root + '/assets'));

app.get('/login', function (req, res) {
  return githubOAuth.login(req, res);
});

app.get('/auth/github/callback', function (req, res) {
  return githubOAuth.callback(req, res);
});

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
