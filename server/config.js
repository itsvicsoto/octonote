module.exports = {
  app: 'TORO GrooveBox',
  port: 5000,
  root: '/../application/',
  githubConfig: {
    development: {
      githubClient: '113ff19084af835aa30b',
      githubSecret: '5fbaa67d8f1a11ad8afb53434e5cacc6f2ade1b3',
      baseURL: 'http://localhost:5005',
      loginURI: '/login',
      callbackURI: '/auth/github/callback',
      scope: 'user, gist' // optional, default scope is set to user
    },
    production: {
      githubClient: 'f75c6125371d975f6227',
      githubSecret: '98b094510a2e6ce6c22242127c631163ef19f168',
      baseURL: 'https://octonote.herokuapp.com',
      loginURI: '/login',
      callbackURI: '/auth/github/callback',
      scope: 'user, gist' // optional, default scope is set to user
    }
  }
};
