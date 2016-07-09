class DataService {
  constructor($resource) {
    this.$resource = $resource;
  }
  getSpeedLimit(filter) {
    filter.returnLength = 100;
    return this.$resource('/speedLimit/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2/:speed/:returnLength', filter)
               .query().$promise
               .then(response => response);
  }
  getBusCount(filter) {
    return this.$resource('/busLineCount/:dateBegin/:dateEnd', filter).query().$promise
      .then(response => response);
  }
  getAverageSpeed(filter) {
    return this.$resource('/averagespeed/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2', filter).query().$promise
      .then(response => response);
  }
}

DataService.$inject = ['$resource'];

export default DataService;
