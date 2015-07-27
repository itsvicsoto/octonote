var OctonoteAPI = angular.module('OctonoteAPI', []);


OctonoteAPI.factory('OctonoteAPIEndpoints', [
  function () {

    var githubBaseUrl = 'https://api.github.com';

    return {
      getGists: githubBaseUrl + '/gists',
      getGistsPublic: '/gists/public',
      getGistsStarred: '/gists/starred'
    }
  }
]);

OctonoteAPI.factory('OctonoteAPI', [
  '$http',
  'OctonoteAPIEndpoints',
  function ($http, OctonoteAPIEndpoints) {
    return {
      getGists: function () {
        var options = {
          url: OctonoteAPIEndpoints.getGists,
          method: 'GET'
        };

        return $http(options);
      }
    }
  }
]);
