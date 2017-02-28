/**
 * @namespace act.Main
 */
define([
  'app/services/dialog.service',
  'app/main-images/services/products.service',
  ], function() {

  angular
    .module('act.Main.Images')
    .controller('MainImagesBaseController', controller);

  controller.$inject = ['$state', 'APP_BASE_PATH', 'logger', 'ToastService',
    'DialogService', 'ProductsService'];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Main Base Controller
   *
   * @public
   *
   * @memberof   act.Main.Images
   *
   * @author     jayeshactonate
   *
   * @param      {Object}  $state           ui-router state service
   * @param      {string}  APP_BASE_PATH    App Base Path Constant
   * @param      {Object}  logger           act.log logger
   * @param      {Object}  ToastService     act.Services.ToastService
   * @param      {Object}  DialogService    act.Services.DialogService
   * @param      {Object}  ProductsService  act.Main.Users.ProductsService
   */
  function controller($state, APP_BASE_PATH, logger, ToastService, DialogService,
    ProductsService) {

    var ViewModel = this;

    ViewModel.showAddDialog = showAddDialog;

    // ///////////////////////////////////////////////////
    

    function showAddDialog(event) {

      DialogService.show({
        controller: 'MainImagesAddController',
        controllerPath: 'app/main-images/ctrl/add-dialog.ctrl.js',
        templatePath: 'app/main-images/tpl/add-dialog.tpl.html',
        options: {
          targetEvent: event
        }
      });
    }

  }

});

