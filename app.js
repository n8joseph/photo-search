

angular.module('app', [])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})
.controller('MyController', function($scope, $http, $sce) {
	$scope.embedUrl = "ENTER HERE";

	$scope.trustSrc = function(src) {
		return $sce.trustAsResource(src);
	};

	$scope.searchInstagram = function (keyword) {



	};
});