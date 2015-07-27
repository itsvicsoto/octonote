module.exports = {
  setAuthenticationCookies: function (token, res) {
    res.cookie('github.scope', token.scope, {
      expires: new Date(Date.now() + 900000)
    });
    res.cookie('github.access_token', token.access_token, {
      expires: new Date(Date.now() + 900000)
    });
    res.cookie('github.token_type', token.token_type, {
      expires: new Date(Date.now() + 900000)
    });
    res.redirect('/dashboard');
  },
  removeAuthenticationCookies: function (req, res) {

  }
};
