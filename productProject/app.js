/**
 * Created by karishma on 2/6/16.
 */

var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {


});
app.controller("HttpGetController", function ($scope, $http,$location) {

    $scope.sendData = function () {
        var data = {
            name: $scope.name,
            description: $scope.description,
            images: $scope.images,
            price: $scope.price,
            weight: $scope.Weight
        };


        $http.post(' http://satpalmoto.storehippo.com/entity/products', {data: data})
            .then(function (data, status) {
                $scope.PostDataResponse = data;
                console.log("......", $scope.PostDataResponse);
                window.location.assign("listProducts.html")
            }, function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status;

            });
    };

    $http.get("http://satpalmoto.storehippo.com/entity/products")
        .then(function (response) {
            console.log(".............", response.data.records)
            $scope.names = response.data.records;
            console.log(".............", $scope.names)

            console.log(".......999999999999......", $scope.names)
            $scope.name = '';
            $scope.price = '';
            $scope.images = '';
            $scope.Weight = '';

            $scope.edit = true;
            $scope.hideform = true;
            $scope.editUser = function (_id) {
                $scope.hideform = false;
                if (_id == 'new') {
                    $scope.edit = true;
                    $scope.name = '';

                } else {
                    $scope.edit = false;
                     $scope.product = $scope.names[_id];
                }
            };
            
            $scope.updateData = function(){
                $http.put("http://satpalmoto.storehippo.com/entity/products/"+$scope.product._id,{data:$scope.product})
                    .then(function (data) {
                        
                    })
            }
            $scope.remove =  function(index){
                alert("the index is deleted:" + index);

                console.log("......44444444444444.......", $scope.names)
                $http.delete("http://satpalmoto.storehippo.com/entity/products/"+$scope.names[index]._id)
                    .then(function (data) {
                        $scope.names.splice(index,1);
                    })
            };

        });
});
