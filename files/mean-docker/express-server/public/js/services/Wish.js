angular.module('wishService', [])

	// super simple service
	// each function returns a promise object
	.factory('Wishes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/Wish');
			},
			create : function(todoData) {
				return $http.post('/api/Wish', wishData);
			},
			delete : function(id) {
				return $http.delete('/api/Wish/' + id);
			}
		}
	}]);
