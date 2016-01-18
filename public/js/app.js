angular.module('ftfLandingPage', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './features/home/homeTmpl.html',
            controller: 'homeCtrl as home'
        })

    $urlRouterProvider
        .otherwise('/');


});