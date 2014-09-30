var photoUpload = angular.module('photoUpload', []);
var remoteUrl = "http://192.168.1.3:8080";

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get(remoteUrl + "/api/todos")
		.success(function(data) {
			$scope.photos = data;
			console.log("-----------haha");
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