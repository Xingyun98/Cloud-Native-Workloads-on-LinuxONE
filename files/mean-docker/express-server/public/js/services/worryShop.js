angular.module('worryShopServer', [])

	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			},
			create : function(userData) {
				return $http.post('/api/users', userData);
			},
			delete : function(id) {
				return $http.delete('/api/users/' + id);
			}
		}
	}])
	.factory('Wishes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/wishes');
			},
			create : function(wishData) {
				return $http.post('/api/wishes', wishData);
			},
			delete : function(id) {
				return $http.delete('/api/wishes/' + id);
			},
			getYourWishes: function(user_name){
				return $http.get('/api/user_wishes'+user_name);
			}
		}
	}]);

