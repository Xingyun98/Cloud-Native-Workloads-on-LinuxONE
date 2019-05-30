angular.module('Controller', [])
	.controller('Register', ['$scope', '$http', 'Users', "$rootScope", function ($scope, $http, $rootScope, Users) {
		$scope.fromUserData = {};
		$scope.registering = false;
		$rootScope.loginName;
		$scope.codeAgain;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Users.get()
			.success(function (data) {
				console.log(data);
				$scope.users = data;
				$scope.registering = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createUser = function () {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			console.log($scope.fromUserData);
			if ($scope.fromUserData.user_name != undefined) {
				console.log("I'm in.");
				$scope.registering = true;
				$rootScope.loginName=$fromUserData.user_name;

				// call the create function from our service (returns a promise object)
				Users.create($scope.fromUserData)

					// if successful creation, call our get function to get all the new todos
					.success(function (data) {
						$scope.registering = false;
						$scope.fromUserData = {}; // clear the form so our user is ready to enter another
						$scope.users = data; // assign our new list of todos
					});
			}

		};

		isDigitOrLetter = function (s) {
			var re = /^[0-9a-zA-Z]*$/g;
			if (!re.test(s))
				return false;
			return true;
		};

		isEmail = function (s) {
			var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if (!pattern.test(s))
				return false;
			return true;
		}

		$scope.userNameFormmatRight = function () {
			if ('user_name' in $scope.fromUserData && $scope.fromUserData.user_name) {
				return $scope.userNameValid();
			}
			return true;
		};

		$scope.userNameValid = function () {
			if (!'user_name' in $scope.fromUserData || !$scope.fromUserData.user_name)
				return false;
			var user_name = $scope.fromUserData.user_name;
			return isDigitOrLetter(user_name) && user_name.length >= 6 && user_name.length <= 15;
		};

		$scope.codeFormmatRight = function () {
			if ('code' in $scope.fromUserData && $scope.fromUserData.code) {
				var code = $scope.fromUserData.code;
				return isDigitOrLetter(code) && code.length >= 6;
			}
			return true;
		};

		$scope.emailFormmatRight = function () {
			if ('email' in $scope.fromUserData && $scope.fromUserData.email) {
				var email = $scope.fromUserData.email;
				return isEmail(email);
			}
			return true;
		};

		emailValid = function () {
			if (!'email' in $scope.fromUserData || !$scope.fromUserData.email)
				return false;
			return isEmail($scope.fromUserData.email);
		};


		codeValid = function () {
			if (!'code' in $scope.fromUserData)
				return false;
			else
				return $scope.fromUserData.code && $scope.codeAgain && $scope.codeFormmatRight() && $scope.fromUserData.code == $scope.codeAgain;
		};

		$scope.allRight = function () {
			var allRight = $scope.userNameValid() && codeValid() && emailValid();
			console.log(allRight);
			return allRight;
		};


		$scope.submit = function () {
			$scope.createUser();
		};

	}])
	.controller('wishController', ['$scope','$http',"$rootScope",'Wishes', function($scope, $http , $rootScope, Wishes) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.formData.user_name=$rootScope.loginName;
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Wishes.get()
			.success(function(data) {
				$scope.wishes = data;
				$scope.loading = false;
			});
			
		//查看自己的愿望
		$scope.getYourWishes = function(){
			//登陆之后再调用，不用验证user_name的存在
			$scope.loading = true;
			Wishes.getYourWishes($rootScope.loginName)
				.success(function(data){
					$scope.loading = false;
					$scope.formData = {};
					$scope.your_wishes = data;
				})
		}
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createWish = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.title != undefined && $scope.formData.description != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Wishes.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.wishes = data; // assign our new list of todos
					});

			}


		};
		
		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteWish = function(id) {
			$scope.loading = true;

			Wishes.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.wishes = data; // assign our new list of todos
				});
		};

		$scope.findWishesByUser_name()=function(){

		}
	}]);
