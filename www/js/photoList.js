var photoList = angular.module('photoList', []);


function mainController($scope, $http) {
	$scope.formData = {};
	$scope.remoteUrl = "http://192.168.1.3:8080";
	// when landing on the page, get all todos and show them
	$http.get($scope.remoteUrl + "/api/todos", {timeout: 500})
		.success(function(data) {
			$scope.photos = data;
			console.log(data);
		})
		.error(function(data) {
			alert('bad');
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}