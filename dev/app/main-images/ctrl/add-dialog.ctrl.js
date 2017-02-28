/**
 * @namespace act.Base
 */
define([], function() {

  angular
    .module('act.Main.Images')
    .controller('MainImagesAddController', controller);

  controller.$inject = ['$scope', 'logger', 'Upload', 'APP_REST_URL', 'ToastService',
    'DialogService'];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Login Controller
   *
   * @public
   *
   * @memberof   act.Main.Images
   *
   * @author     jayeshactonate
   *
   * @param      {Object}  $scope        Controller Scope
   * @param      {Object}  logger        act.log logger
   * @param      {Upload}  Upload        ng-file-upload service
   * @param      {String}  APP_REST_URL  ToastService
   * @param      {<type>}  ToastService  act.Services.ToastService
   */
  function controller($scope, logger, Upload, APP_REST_URL, ToastService, DialogService) {
    var ViewModel = this;
    var log = logger.log().child('MainImagesAddController');

    ViewModel.photoSelected = false;
    ViewModel.photoUploadInProgress = false;
    
    ViewModel.removePhoto = removePhoto;
    ViewModel.closeDialog = closeDialog;
    
    initWatch();

    // ////////////////////////////////////
    
    function initWatch() {
      $scope.$watch('ViewModel.photo', function () {
        if (ViewModel.photo && ViewModel.photo.name) {
          ViewModel.photoSelected = true;

          startUpload(ViewModel.photo);
        };
      });
    }

    function startUpload() {
      log.info('Starting upload for file', ViewModel.photo);
      ViewModel.photoUploadInProgress = true;
      
      ToastService.loading();

      Upload.upload({
          url: APP_REST_URL + '/images/upload',
          data: {file: ViewModel.photo}
      })
        .then(function(res) {
          ToastService.hide();
          log.info('File uploaded successfully', res);
        })
        .catch(function(err) {
          log.error('Error uploading file', err);
          ToastService.error('Error uploading file');
        })
        .finally(function() {
          ViewModel.photoUploadInProgress = false;
        });
    }

    function closeDialog() {
      DialogService.cancel();
    }

    function removePhoto($event) {
      ViewModel.photo = false;
      ViewModel.photoSelected = false;
    }
  }
});
