module.exports = {
  app: 'TORO GrooveBox',
  port: 5000,
  root: '/../application/',
  githubConfig: {
    githubClient: '113ff19084af835aa30b',
    githubSecret: '5fbaa67d8f1a11ad8afb53434e5cacc6f2ade1b3',
    baseURL: 'http://localhost:5005',
    loginURI: '/login',
    callbackURI: '/auth/github/callback',
    scope: 'user' // optional, default scope is set to user
  }
};
