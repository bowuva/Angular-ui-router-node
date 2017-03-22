/* use strict */
var app=angular.module("tvApp",[]);

app.service("tvService",function($http,$q){
   var deferred=$q.defer();
    $http.get('../jsondata/tvdetails.json').then (function(data){
        //console.log('service '+data);
      deferred.resolve(data);
    });
    this.getTvdet=function(){
        return deferred.promise;
    }
})

app.controller("tvctrl",function($scope,tvService){
      //console.log('in tv controller now');
        var promise=tvService.getTvdet();
        promise.then(function(data){
            //console.log(data.data);
            $scope.tvs=data.data;
            //console.log($scope.tvs);
        });
    })

