/**
 * Created by BowUva on 2/3/2017.
 */
var app = angular.module("myApp",[]);
app.service=("studentsService",function($http){
    //var deferred = $q.defer();

    this.getStudents =function(){
        return    $http.get('Controllers/studentsData.json');
    }
});
app.controller("studentsCtrl",function($scope,studentsService){
    studentsService.getStudents().then(function(response){
        $scope.students = response.data;
        console.log($scope.students);
    });
});
