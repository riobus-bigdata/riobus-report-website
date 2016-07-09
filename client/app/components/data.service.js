class DataService {
  constructor($http) {
    this.$http = $http;
  }
  getSpeedLimit(filter) {
    return this.$http.get('/speedLimit/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2/:speed/:returnLength', filter)
      .then(response => response.data);
  }
  getBusCount(filter) {
    return this.$http.get('/busLineCount/:dateBegin/:dateEnd', filter)
      .then(response => response.data);
  }
  getAverageSpeed(filter) {
    return this.$http.get('/averagespeed/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2', filter)
      .then(response => response.data);
  }
}

DataService.$inject = ['$http'];

export default DataService;
