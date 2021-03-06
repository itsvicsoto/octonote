var OctonoteRoutes = angular.module('octonote.routes', []);

OctonoteRoutes.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise(function () {
      window.location.href = '/error/404';
    });

    $stateProvider
      .state('home', {
        abstract: true,
        url: '/',
        views: {
          '': {
            templateUrl: '/views/home/layout/home.html'
          },
          'header@home': {
            templateUrl: '/views/home/includes/header.html'
          },
          'footer@home': {
            templateUrl: '/views/home/includes/footer.html'
          }
        }
      })
      .state('home.default', {
        url: '',
        data: {
          pageTitle: 'Home'
        },
        views: {
          'content@home': {
            templateUrl: '/views/home/home-default.html'
          }
        }
      })
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        views: {
          '': {
            templateUrl: '/views/dashboard/layout/dashboard.html'
          },
          'toolbar@dashboard': {
            templateUrl: '/views/dashboard/includes/toolbar.html'
          }
        }
      })
      .state('dashboard.default', {
        url: '',
        data: {
          pageTitle: 'Dashboard'
        },
        views: {
          'content@dashboard': {
            templateUrl: '/views/dashboard/dashboard-default.html'
          }
        }
      })
      .state('dashboard.starred', {
        url: '',
        data: {
          pageTitle: 'Starred'
        },
        views: {
          'content@dashboard': {
            templateUrl: '/views/dashboard/dashboard-starred.html'
          }
        }
      })
      .state('dashboard.gist', {
        url: '/gist?:gistId&:gistName',
        data: {
          pageTitle: 'Gist'
        },
        resolve: {
          resolve_getGistDetails: function ($stateParams, OctonoteAPI) {

            var gistId = $stateParams.gistId;

            return OctonoteAPI.getGistById(gistId).then(function (response) {
              return response;
            });

          }
        },
        views: {
          'content@dashboard': {
            controllerAs: 'gistvm',
            controller: 'DashboardGistController',
            templateUrl: '/views/dashboard/dashboard-gist.html'
          }
        }
      });

  }
]);
