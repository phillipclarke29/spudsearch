var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, post)
{
  $scope.post = post;

});


app.controller('ListController', function($scope, $http, $modal) {

    $scope.results = [];

      $scope.isSearching= false

    $scope.search = function(){

      $scope.isSearching= true;

      var term = $scope.searchTerm.split(" ")
      var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK' + '&tags="potato,"' + term

      $http.jsonp(url).success(function(data){

        $scope.results = data.items;
        $scope.isSearching= false;
      });

    };

    $scope.open = function (_post) {
      console.log(_post)
       var modalInstance = $modal.open({
         controller: "ModalInstanceCtrl",
         templateUrl: 'myModalContent.html',
           resolve: {
               post: function()
               {
                   return _post;
               }
           }
            });

   };



  });
