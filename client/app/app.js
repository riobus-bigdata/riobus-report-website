import 'angular-material/angular-material.css';

import angular from 'angular';
import material from 'angular-material'
import resource from 'angular-resource';
import moment from 'moment';
import ngMoment from 'angular-moment';
import ngmap from 'ngmap';

import AppComponent from './app.component';
import DataService from './data.service';

angular.module('app', [
    material,
    resource,
    ngmap,
    ngMoment.name
  ])
  .component('app', AppComponent)
  .service('data', DataService);
