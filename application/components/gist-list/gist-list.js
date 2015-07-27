var GistList = angular.module('octonote.component.gistList', []);

GistList.directive('gistList', [
  'OctonoteAPI',
  function (OctonoteAPI) {
    return {
      restrict: 'E',
      templateUrl: '/components/gist-list/gist-list.html',
      controllerAs: 'gistList',
      controller: function () {

        var gistList = this;

        OctonoteAPI.getGists().then(function (result) {
          gistList.gists = result;
        });

      },
      link: function (scope) {
      }
    }
  }
]);

GistList.directive('gistItem', [
  function () {

    function convertFilesToArray(obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    }

    return {
      restrict: 'E',
      scope: {
        ngModel: '='
      },
      templateUrl: '/components/gist-list/gist-item.html',
      controllerAs: 'gistItem',
      controller: function ($scope) {

        // CtrlAs
        var gistItem = this;

        // Gist Data
        var gistData = $scope.ngModel;

        // Get the Array equivalent to get first key
        var gistArr = convertFilesToArray(gistData.files);

        gistItem.gist = gistData;
        gistItem.files = gistArr;

      },
      link: function (scope) {
      }
    }
  }
]);



