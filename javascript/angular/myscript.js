var app = angular.module("myapp",[]);

app.controller("MyCtrl",function($scope){
    $scope.visible = true;
    $scope.toggle = function() {
        $scope.visible = !$scope.visible;
    };
}
      
