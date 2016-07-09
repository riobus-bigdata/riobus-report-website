import angular from 'angular';
import DataService from './data.service';

let componentModule = angular.module('app.components', [

])
  .service('DataService', DataService)
.name;

export default componentModule;
