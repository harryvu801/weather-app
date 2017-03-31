angular.module('weatherApp').service('service',function($http){

var apiKey = '&appid=1389cfd918bfe617f0e5197678a3f414'
var cwUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';


  this.getCity = function (){
    console.log('made it to service');
    return $http.get('http://ip-api.com/json').then(function(response){
      console.log('got response');
      console.log(response.data.city);
      return response.data.city
      });

  }

  this.getWeather = function (city) {
    console.log('@ 2nd fn');
    return $http.get(cwUrl + city +apiKey).then(function (results){
      console.log('2nd response');
      console.log(results.data);
      return results.data
    })

  }

});
