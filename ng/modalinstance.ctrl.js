app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, post)
{
  $scope.post = post;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
 };


});
