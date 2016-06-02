
    var app = angular.module('myApp', []);
    app.controller('customerCtrl', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://api.myjson.com/bins/19ynm'
        }).then(function successCallback(response) {
            console.log("heyyyyyyyyyyyy",response.data)
            $scope.productsInCart = response.data.productsInCart;
            console.log("ttttttttttttt", response.data.productsInCart)



        }, function errorCallback(response) {
            console.log("rksgjahkhgwe",response)
        });

        $scope.abc=function(id){
            $scope.productsInCart.forEach(function(product){
                if(product.p_id==id){
                    $scope.modal_data=product;
                }
            })
        }

    });

    /*app.controller('productItem',function($scope){

    })*/

