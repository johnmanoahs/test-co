var coApp = angular.module("coApp", []);

coApp.service("coAppService", function($http, $q){
	var deferred = $q.defer();
	$http.get("/data/data.json").then(function(response){
		deferred.resolve(response);
	});

	this.getData = function(){
		return deferred.promise;
	}
})

.controller("coDataGrabberCtrl", function($scope, coAppService){
	var promise = coAppService.getData();
	promise.then(function(response){
		$scope.results = response.data;
		console.log($scope.results);
	});

	$scope.showHide = function(row){
		$scope.classShowHide = row.state + ' selected';
		console.log(row);
	};

})

.controller("runningCtrl", function($scope){
	if($scope.row.state == "Running"){
		$scope.divbar = ($scope.row.metrics.running/100)*50;
	}
	else{
		$scope.divbar = 0;
	}
	console.log($scope.row.state + "asdfasdf");
});