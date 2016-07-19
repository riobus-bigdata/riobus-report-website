class DataService {
  constructor($resource) {
    this.$resource = $resource;
  }
  getSpeedLimit(filter) {
    filter.returnLength = 100;
    return this.$resource('http://64.137.217.119:3000/speedLimit/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2/:speed/:returnLength', filter)
               .get().$promise
               .then(response => response);
  }
  getBusCount(filter) {
    return this.$resource('http://64.137.217.119:3000/busLineCount/:dateBegin/:dateEnd', filter).get().$promise
      .then(response => response);
  }
  getAverageSpeed(filter) {
    return this.$resource('http://64.137.217.119:3000/averagespeed/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2', filter).get().$promise
      .then(response => response);
  }
}

DataService.$inject = ['$resource'];

export default DataService;
