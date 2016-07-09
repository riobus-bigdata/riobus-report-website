import 'angular-material/angular-material.css';

import angular from 'angular';
import material from 'angular-material'
import ngmap from 'ngmap';

import AppComponent from './app.component';

angular.module('app', [
    material,
    ngmap
  ])
  .component('app', AppComponent);
