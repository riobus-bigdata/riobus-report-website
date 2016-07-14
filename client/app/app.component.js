import template from './app.html';
import moment from 'moment';

let appComponent = {
  template,
  controller: AppController
};

AppController.$inject = ['NgMap', 'data', '$mdToast'];

function AppController(NgMap, data, $mdToast){
  var vm = this;

  vm.filter = {
    speed:60,
    type: 'Limit',
    lat1: '-22.92',
    lng1: '-43.18',
    lat2: '-22.93',
    lng2: '-43.17',
    $dateBegin: moment().toDate(),
    $dateEnd: moment().toDate()
  };

  vm.search = search;

  NgMap.getMap("map").then(map => {
    console.log('map', map);
    vm.map = map;
  });
  vm.boundsChanged = function() {
    vm.filter.lat1 = this.getBounds().getSouthWest().lat();
    vm.filter.lng1 = this.getBounds().getSouthWest().lng();

    vm.filter.lat2 = this.getBounds().getNorthEast().lat();
    vm.filter.lng2 = this.getBounds().getNorthEast().lng();
  };

  function search() {
    vm.average = undefined;
    vm.linesCount = undefined;
    vm.speedLimit = undefined;

    vm.loading = true;
    // fixing dates formats
    vm.filter.dateBegin = moment(vm.filter.$dateBegin, 'L', true).format('YYYY-MM-DDTHH:mm:ss');
    vm.filter.dateEnd = moment(vm.filter.$dateEnd, 'L', true).format('YYYY-MM-DDTHH:mm:ss');

    var promise;
    switch (vm.filter.type){
      case 'Limit':
        if(!vm.filter.speed)
          return;
        promise = data.getSpeedLimit(vm.filter);
        break;
      case 'Lines':
        promise = data.getBusCount(vm.filter);
        break;
      case 'Average':
        promise = data.getAverageSpeed(vm.filter);
        break;
      default:
        return;
    }

    promise.then(result => {
      if(vm.filter.type === 'Limit'){

      }

      if(vm.filter.type === 'Lines'){
        vm.linesCount = result.reduce((obj,val) => {
          obj[val[0]] = val[1];
          return obj;
        }, {});
      }

      if(vm.filter.type === 'Average'){
        vm.average = result.result;
      }
      vm.loading = false;
    },
    error => {
      $mdToast.showSimple('Error!');
      vm.loading = false;
    });
  }
}

export default appComponent;
