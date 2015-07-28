var OctonoteAPI = angular.module('OctonoteAPI', []);


OctonoteAPI.factory('OctonoteAPIEndpoints', [
  function () {

    var githubBaseUrl = 'https://api.github.com';

    return {
      getGists: githubBaseUrl + '/gists',
      getGistsPublic: githubBaseUrl + '/gists/public',
      getGistsStarred: githubBaseUrl + '/gists/starred',
      getGistById: function (id) {
        return githubBaseUrl + '/gists/' + id;
      }
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
      },
      getGistsStarred: function () {
        var options = {
          url: OctonoteAPIEndpoints.getGistsStarred,
          method: 'GET'
        };

        return $http(options);
      },
      getGistById: function (id) {
        var options = {
          url: OctonoteAPIEndpoints.getGistById(id),
          method: 'GET'
        };

        return $http(options);
      }
    }
  }
]);
