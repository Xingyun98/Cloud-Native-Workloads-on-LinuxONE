angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}])

// inject the Todo service factory into our controller
	.controller('userController', ['$scope','$http','Users', function($scope, $http, Users) {
		$scope.userData = {};
		$scope.loading = true;
		$scope.pw;
		
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Users.get()
			.success(function(data) {
				$scope.User = data;
				$scope.loading = false;
			});


		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createUser = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.userData.user_ID != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Users.create($scope.userData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.userData = {}; // clear the form so our user is ready to enter another
						$scope.User = data; // assign our new list of todos
					});
			}

		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteUser = function(id) {
			$scope.loading = true;

			Users.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.User = data; // assign our new list of todos
				});
		};
	}])

	// inject the Todo service factory into our controller
	.controller('wishController', ['$scope','$http','Wishes', function($scope, $http, Users) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Wishes.get()
			.success(function(data) {
				$scope.Wish = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createWish = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.wish_ID != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Wishes.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.Wish = data; // assign our new list of todos
					});
			}

		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteWish = function(id) {
			$scope.loading = true;

			WIshes.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.Wish = data; // assign our new list of todos
				});
		};
	}])

	.controller('Register', ['$scope', '$http', 'Users', function ($scope, $http, Users) {
		$scope.fromUserData = {};
		$scope.registering = false;

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