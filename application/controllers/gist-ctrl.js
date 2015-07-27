var DashboardGist = angular.module('octonote.controller.dashboardGist', [])

DashboardGist.controller('DashboardGistController', [
  '$stateParams',
  'resolve_getGistDetails',
  'OctonoteAPI',
  function ($stateParams, GistDetails, OctonoteAPI) {
    // CtrlAs
    var gistvm = this;

    gistvm.selectedFile = $stateParams.gistName;
    gistvm.gistDetails = GistDetails.data;

  }
]);
