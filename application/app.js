// Components
var Octonote = angular.module('Octonote', [
  // NG Library
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'hljs',

  // UI Router
  'octonote.routes',

  'OctonoteAPI',

  // Components
  'octonote.component.gistList',
  'octonote.component.gist',
  'octonote.component.gistListFilesCollection',

  // Ctrls
  'octonote.controller.dashboardGist'
]);

Octonote.config([
  '$provide',
  '$httpProvider',
  '$locationProvider',
  'hljsServiceProvider',
  function ($provide, $httpProvider, $locationProvider, hljsServiceProvider) {
    // Http Interceptors for Authenticated Requests
    $provide.factory('HttpInterceptor', [
        '$q',
        '$cookies',
        '$injector',
        function ($q, $cookies, $injector) {
            var interceptor = {};

            interceptor.auth = function () {
                /**
                 * TODO: Server Side Fix Maybe?
                 * Still clueless why cookies are with extra something but as a work
                 * around, we'll regex match and replace characters that are not
                 * necessary to make an authenticated request.
                 *
                 **/
                var accessToken = $cookies.get('github.access_token');
                // Use when necessary: you may apply the same pattern for matching the
                // actual needed string used in getting `accessToken`.
                // var currentUser = $cookies.get('userId');

                return !accessToken ? null : 'bearer ' + accessToken;
            };

            // Request Headers:
            // Add config headers here when necessary.
            interceptor.request = function (config) {
                config.headers = config.headers || {};
                // If an existing Authorization was added do not use our coder accessToken
                config.headers.Authorization = config.headers.Authorization || interceptor.auth();


                return config
            };

            interceptor.responseError = function (response) {
                var status = {
                    '500': function () { return $q.reject(response); },
                    '422': function () { return $q.reject(response); },
                    '401': function () { return $q.reject(response); }
                };
                return status[response.status] &&
                    status[response.status]();
            };

            return interceptor;
        }
    ]);

    // Authentication tokens here
    $httpProvider.interceptors.push('HttpInterceptor');

    // HTML5Mode
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '    '
    });

  }]);

Octonote.constant('OctonotePathHelpers', {
  // URL specific to application root
  baseApp: '/app/',
  // URL specific to vendor folder
  baseVendor: '/vendor/',
  useAppUrl: function (path) {
    return this.baseApp + path;
  }
});

Octonote.controller('OctonoteController', [
  '$scope',
  '$stateParams',
  '$cookies',
  function ($scope, $stateParams, $cookies) {

    var _this = $scope;

    /**
     * This is our global variable wrapper for all readily available
     * data in our vm. See usage on index.html title ng-bind="coder.pageTitle"
     *
     * @type {{}}
     */
    _this.octonote = {};

    /**
     * We have to watch the stateChanges to adjust the pageTitle according to
     * the data : {} being passed by each views used in our ui-router usage
     * check routes.js for more info.
     */
    _this.$on('$stateChangeSuccess', function (e, toState) {

      if (angular.isDefined(toState.data.pageTitle)) {
        _this.octonote.pageTitle = toState.data.pageTitle + ' | Octonote';
      }

      /**
       * Expose this coder.stateParams and toState to your VM for
       * global access of each  state changes
       *
       * @type {$stateParams|*}
       */
      _this.octonote.toState = toState;
      _this.octonote.stateParams = $stateParams;


    });

    _this.githubLogin = function () {
      location.href = '/login';
    };


    console.log('checkCookies', $cookies.get('github.access_token'));


  }
]);
