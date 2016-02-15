// app.js
var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/profile');
    
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: 'profile.html',
			controller:function($scope){
			document.getElementById("experience").className="";
			document.getElementById("interest").className="";
			document.getElementById("drive").className="";
			document.getElementById("profile").className="active";			
			}
        })
         .state('experience', {
            url: '/experience',
            templateUrl: 'experience.html',
			controller:function($scope){
			document.getElementById("profile").className="";
			document.getElementById("interest").className="";
			document.getElementById("drive").className="";
			document.getElementById("experience").className="active";			
			}
        })
         .state('interest', {
            url: '/interest',
            templateUrl: 'interest.html',
			controller:function($scope){
			document.getElementById("profile").className="";
			document.getElementById("experience").className="";
			document.getElementById("drive").className="";
			document.getElementById("interest").className="active";			
			}
        })
         .state('placement', {
            url: '/drives',
            templateUrl: 'placement.html',
			controller:function($scope){
			
   
			$scope.imgurl="http://snag.gy/jUF9r.jpg";
			document.getElementById("profile").className="";
			document.getElementById("experience").className="";
			document.getElementById("interest").className="";
			document.getElementById("drive").className="active";
			$scope.content=[{title:'Java',name:'Metacube Pvt Ltd',status:3,date:'21 Feb 2016'},
			{title:'Ruby',name:'Metacube Pvt Ltd',status:5,date:'25 Feb 2016'},
			{title:'Python',name:'Metacube Pvt Ltd',status:7,date:'28 Feb 2016'},
			{title:'Testing',name:'Metacube Pvt Ltd',status:5,date:'25 Feb 2016'},
			{title:'Perl',name:'Metacube Pvt Ltd',status:7,date:'28 Feb 2016'},
			{title:'Ruby on Rails',name:'Metacube Pvt Ltd',status:5,date:'25 Feb 2016'},
			{title:'AngularJS',name:'Metacube Pvt Ltd',status:7,date:'28 Feb 2016'}];
			}
			
        });
        

       
});