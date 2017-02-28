/**
 * @namespace act.Images
 */
define([
 'app-bootstrap'
], function() {

  angular
    .module('act.Main.Images')
    .config(RouterConfig);


  // /////////////////////////////////////

  /*=====================================
  =            Config Blocks            =
  =====================================*/

  RouterConfig.$inject = ['APP_BASE_PATH', '$stateProvider', 'lazyProvider'];

  /**
   * Configure the act.Main.Images module's routes
   *
   * @public
   *
   * @memberof   act.Main
   *
   * @author     jayeshactonate
   *
   * @class
   * @param      {String}  APP_BASE_PATH   App Base path
   * @param      {Object}  $stateProvider  ui-router's stateProvider which is used to create
   *                                       application states/routes
   * @param      {Object}  lazyProvider    Provider instance of act.lazy used to lazy load modules
   */
  function RouterConfig(APP_BASE_PATH, $stateProvider, lazyProvider) {

    var BASE_DIR_CTRL = APP_BASE_PATH + 'app/main-images/ctrl/';
    var BASE_DIR_TPL = APP_BASE_PATH + 'app/main-images/tpl/';

    lazyProvider.configure('act.Main.Images');

    $stateProvider
      .state('app.main.images', {
        url: '/property/images',
        templateUrl: BASE_DIR_TPL + 'base.tpl.html',
        controller: 'MainImagesBaseController',
        controllerAs: 'ViewModel',
        resolve: {
          services: ['lazy',
            function(lazy) {
              return lazy.load([
                BASE_DIR_CTRL + 'base.ctrl.js',
                'ng-file-upload'
              ]);
            }
          ]
        }
      });
  }
});
