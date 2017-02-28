/**
 * @namespace act.Auth
 */
define([
  'app-bootstrap'
], function() {

  angular
    .module('act.Base')
    .controller('ToastController', controller);

  controller.$inject = ['$mdToast'];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Auth Base Controller
   *
   * @public
   *
   * @memberof   act.Base
   *
   * @author     jayeshactonate
   *
   * @param      {Objet}  $mdToast  Angular Material Toast Service
   */
  function controller($mdToast) {
    var ViewModel = this;

    ViewModel.closeToast = closeToast;

    // //////////////////////////////////////////////////////

    /**
     * Close the toast
     *
     * @public
     *
     * @memberof   act.Base.ToastController
     *
     * @author     jayeshactonate
     */
    function closeToast() {
      $mdToast.hide();
    }
  }

});

