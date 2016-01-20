app.controller('ListController', function($scope, $http, $modal, $filter) {
    $scope.results = [];

      $scope.isSearching= false

    $scope.search = function(){

      $scope.isSearching= true;

      var term = $scope.searchTerm.split(" ")
      var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK' + '&tags="potato,"' + term

      $http.jsonp(url).success(function(data){

        $scope.results = data.items;
        console.log(data.items[0].tags)
        $scope.isSearching= false;
      });

    };

    $scope.open = function (_post) {
      console.log(_post)
       var modalInstance = $modal.open({
         controller: "ModalInstanceCtrl",
         templateUrl: './layouts/postModal30.html',
         windowClass: 'app-modal-window',
           resolve: {
               post: function()
               {
                   return _post;
               }
           }
      });


   };
});
