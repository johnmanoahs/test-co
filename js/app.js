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
		//console.log($scope.results);
	});

})

.controller("runningCtrl", function($scope){
	if($scope.row.state == "Running"){
		$scope.divbar = ($scope.row.metrics.running/100)*50;
	}
	else{
		$scope.divbar = 0;
	}
})

.constant('prevSelected', '')

.controller("showHideCtrl", ['prevSelected', function($scope, prevSelected){
	this.sel = null;
	$scope.num = 0 ;
	//console.log(prevSelected);
	this.expandthis = function(rowindex, rowid){
		/*console.log(prevSelected)
		$scope.sel = rowid;
		angular.element(rowevent.target).addClass('selected');
		if(prevSelected != ''){
			var prevSelDiv = angular.element( document.querySelector( '#'+prevSelected ) );
			prevSelDiv.removeClass('selected');
			prevSelected = rowid;
		}
		*/
		$scope.num = rowindex
		console.log(rowindex);
	}
}]);