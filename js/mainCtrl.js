angular.module('weatherApp').controller('mainCtrl', function($scope,service) {
  $scope.test="hello"


  $scope.getCity = function () {
    console.log('function fired');
    return service.getCity().then(function(response){
      service.getWeather(response).then(function(results){
        $scope.weather = results
        $scope.farenheit= (results.main.temp * (9/5) - 459.67).toFixed(2);
      })
    })

  }

})
