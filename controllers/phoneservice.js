/**
 * Created by BowUva on 1/25/2017.
 */
var app=angular.module("phoneApp",[]);

app.service("phoneService",function($http){
    /*var deferred=$q.defer();
    $http.get('../jsondata/Phonedetails.json').then (function(data){
        console.log('service '+data);
        deferred.resolve(data);*/
     this.getPhone=function(){
         return $http.get('../jsondata/Phonedetails.json');
     }
    });
    /*this.getPhonedet=function(){
        return deferred.promise;
    }
})*/

app.controller("phonectrl",function($scope,phoneService){
    //console.log('in phone controller now');
    //var promise=phoneService.getPhonedet();
    //promise.then(function(data){
       // console.log(data.data);
       // $scope.phone=data.data;
        //console.log($scope.tvs);
    phoneService.getPhone().then(function(response){
        $scope.phone=response.data;
        console.log($scope.phone);

    });
});
