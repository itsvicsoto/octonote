var GistListFilesCollection = angular.module('octonote.component.gistListFilesCollection', []);

GistListFilesCollection.directive('gistListFilesCollection', [
  'OctonoteAPI',
  function (OctonoteAPI) {

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
      templateUrl: '/components/gist-list-files-collection/gist-list.html',
      controllerAs: 'glfc',
      controller: function ($scope) {

        var glfc = this;

        // Gist Data
        var gistData = $scope.ngModel;

        // Get the Array equivalent to get first key
        var gistArr = convertFilesToArray(gistData.files);


        glfc.gist = gistData;
        glfc.files = gistArr;

      },
      link: function (scope) {
      }
    }
  }
]);

GistListFilesCollection.directive('gistFileItem', [
  function () {
    return {
      restrict: 'E',
      scope: {
        ngModel: '='
      },
      templateUrl: '/components/gist-list-files-collection/gist-item.html',
      controllerAs: 'gistFileItem',
      controller: function ($scope) {

        // CtrlAs
        var gistFileItem = this;

        // Gist Data
        var gistData = $scope.ngModel;

        gistFileItem.gist = gistData;

      },
      link: function (scope) {
      }
    }
  }
]);



