/**
 * Created by BowUva on 2/3/2017.
 */
var app = angular.module('app', ['ui.router']);
app.config (function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'partials/home.html'
        })
        .state('about',{
            url:'/about',
            templateUrl:'partials/about.html'

        })

        .state('about.courses',{
            url:"/courses",
            templateUrl:"partials/courses.html",
            controller:function($scope){
                $scope.courses = ['QA/QE','UI/UX','Dot.Net','Cloud'];
            }
        })
        .state('about.instructors',{
            url:"/instructors",
            templateUrl:"partials/about.instructors.html",
            controller:"instructorsCtrl"
            /*function($scope) {
             $scope.instructors = ['Kumar', 'Medha', 'Shilpi', 'Bharthi'];
             }*/
        })
        .state('about.students',{
            url:"/students",
            templateUrl:"partials/students.html",
            controller:"studentsCtrl"
        })



    /*.state('courses',{
     url:'/courses',
     templateUrl:'partials/courses.html',
     controller:'CourseController'
     })*/
});

app.service("studentsService",function($http){
    //var deferred = $q.defer();
    console.log("in Students service");
    this.getStudents =function(){
        console.log("in getStudents");
        return $http.get('/students');
    }
});
app.controller("studentsCtrl",['$scope','studentsService',function($scope,studentsService){
    console.log("in controller");
    studentsService.getStudents().then(function(response){
        $scope.students = response.data;
        console.log($scope.students);
    });
}]);
app.service("instructorsService",function($http){
    //var deferred = $q.defer();
    console.log("in Instructors service");
    this.getInstructors =function(){
        console.log("in getInstructors");
        return $http.get('/instructors');
    }
});
app.controller("instructorsCtrl",['$scope','instructorsService',function($scope,instructorsService){
    console.log("in controller");
    instructorsService.getInstructors().then(function(response){
        $scope.instructors = response.data;
        console.log($scope.instructors);
    });
}]);