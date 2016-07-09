import template from './app.html';

let appComponent = {
  template,
  controller: AppController
};

AppController.$inject = ['NgMap'];

function AppController(NgMap){
  var vm = this;
  vm.ne, vm.sw;
  NgMap.getMap().then(function(map) {
    console.log('map', map);
    vm.map = map;
  });
  vm.boundsChanged = function() {
    vm.ne = this.getBounds().getNorthEast();
    vm.sw = this.getBounds().getSouthWest();
    //vm.map.showInfoWindow('foo', vm.ne);
  };
}

export default appComponent;
