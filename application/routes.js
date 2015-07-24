var OctonoteRoutes = angular.module('octonote.routes', []);

OctonoteRoutes.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise(function () {
      window.location.href = '/error/404';
    });

    console.log('added log1');
    console.log('added log2');

    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/',
        views: {
          '': {
            templateUrl: '/app/views/layouts/dashboard.html'
          },
          'header@dashboard': {
            templateUrl: '/app/views/includes/dashboard-header.html'
          },
          'leftPanel@dashboard': {
            templateUrl: '/app/views/includes/dashboard-left-panel.html'
          },
          'footer@dashboard': {
            templateUrl: '/app/views/includes/dashboard-footer.html'
          }
        }
      })
      .state('dashboard.default', {
        url: '',
        data: {
          pageTitle: 'Dashboard',
          breadcrumb: [{
            isStateParam: false,
            isLastElem: true,
            title: 'Dashboard',
            routeState: 'dashboard.default'
          }]
        },
        views: {
          'content@dashboard': {
            templateUrl: '/app/views/pages/dashboard-default.html'
          }
        }
      });

  }
]);
