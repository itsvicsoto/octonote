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
          'header@dashboard': {
            templateUrl: '/views/dashboard/includes/header.html'
          },
          'footer@dashboard': {
            templateUrl: '/views/dashboard/includes/footer.html'
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
      });

  }
]);
