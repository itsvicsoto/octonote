var Gist = angular.module('octonote.component.gist', [])

Gist.directive('gistTitle', [
  function () {
    return {
      restrict : 'E',
      template : 'hello',
      link : function (scope) {

      }
    }
  }
]);
