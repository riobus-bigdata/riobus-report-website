import 'angular-material/angular-material.css';

import angular from 'angular';
import material from 'angular-material'

import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    material,
    Components
  ])
  .component('app', AppComponent);
