/**
 * Created by BowUva on 1/17/2017.
 */
var app=angular.module('app', ['ui.router','tvApp','phoneApp']);
//var app=angular.module('app', ['ui.router','phoneApp']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

     $stateProvider
           .state('home',{
            url: '/home',
            templateUrl:'design/file1.html'
             //controller:'msg1'
     })
         .state('home.tvlist', {
             url: '/tvlist',
             templateUrl: 'design/tvdetails.html',
             controller:function($scope) {
                 $scope.tvl = ['Samsung', 'Lg', 'Sony', 'Vizio', 'Avera'];
             }
             })
         .state('home.phonelist',{
              url: '/phonelist',
              templateUrl: 'design/phonelist.html',
              controller:function($scope){
                  $scope.pl = ['Apple','Samsung','Sony','LG','Google'];

        }

    })
         .state('TV',{
             url: '/TV',
             templateUrl:'design/file2.html',
             controller:'tvctrl'
         })
         .state('Phone',{
             url:'/Phone',
             templateUrl:'design/file3.html',
             controller:'phonectrl'
         });
         /*.state('noroute',{
             url:'*path',
             template:'<strong>No route available...pls try </strong>'
         })*/

});
/*app.controller('tvd',['$scope',function($scope){
    $scope.tvdet=['Samsung', 'Lg', 'Sony','Vizio','Avera']

}]);*/

/*app.controller('msg2',['$scope',function($scope){
    $scope.model = 'IPhone 7+';
    $scope.color = 'Pink';
    $scope.memory= '120gb';

}]);

app.controller('msg3',['$scope',function($scope){
    $scope.model='Samsung Note4';
    $scope.color="Grey";
    $scope.memory='16gb';

}])*/