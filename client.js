// Dependencies need to come first
import angular from 'angular';

// Requiring a module in node would look like:
// const helloWorld = require('./hello-world');
// Webpack syntax is:
import helloWorld from './hello-world';

// Call the function
helloWorld();

const angularWebpackApp = angular.module('AngularWebpackApp', []);
// angularWebpackApp.controller('AngularWebPackController', function(){
//   const self = this;
//   self.someString = 'I am a string from the controller';
// })

// Move function (only) to a file
import controllerFunction from './angular-webpack-controller.js'
angularWebpackApp.controller('AngularWebPackController', controllerFunction);