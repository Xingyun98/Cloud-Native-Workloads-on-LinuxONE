angular.module('userService', [])

	// super simple service
	// each function returns a promise object
	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/User');
			},
			create : function(userData) {
				return $http.post('/api/User', UserData);
			},
			delete : function(id) {
				return $http.delete('/api/User/' + id);
			}
		}
	}]);
