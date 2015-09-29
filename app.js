

angular.module('MyApp', [])
	.config(function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
	})
	.controller('MyController', function($scope, $http, $sce) {
	
		$scope.embedUrl = "ENTER HERE";

		$scope.trustSrc = function(src) {
			return $sce.trustAsResource(src);
		};

		$scope.searchInstagram = function(keyword) {
			
			$scope.keyword = $scope.searchForm.keyword.$viewvalue;

			var url = "https://api.instagram.com/v1/tags/" + keyword + "/media/recent";

			var request = {
				callback: 'JSON_CALLBACK',
				client_id: '541fd0be5de2463aa359f64e029722cd',
				count: 9
			};

			$http({
				method: 'JSONP',
				url: url,
				params: request
			})
			.then(function(response) {
				console.log('success!')
				$scope.results = response.data.data
				console.log(response)
			},
			function(response) {
				alert('error')
			})
	};


});

	/* $scope.results = response.data.data[0].images.standard_resolution.url */