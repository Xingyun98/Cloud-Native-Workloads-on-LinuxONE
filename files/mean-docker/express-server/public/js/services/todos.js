angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
/*	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);
*/
	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/User');
			},
			create : function(userData) {
				return $http.post('/api/User', userData);
			},
			delete : function(id) {
				return $http.delete('/api/User/' + id);
			}
		}
	}]);
/*
	.factory('Wishes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/Wish');
			},
			create : function(wishData) {
				return $http.post('/api/Wish', wishData);
			},
			delete : function(id) {
				return $http.delete('/api/Wish/' + id);
			}
		}
	}]);
*/