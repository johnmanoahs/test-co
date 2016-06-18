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

.controller('shCtrl', function($scope){
	this.selunselt = true;
	console.log(this.selunselt)
	$scope.selunsel = function(){
		if(this.selunselt){
			$scope.selunselc = 'unselected';
		}
		else{
			$scope.selunselc = 'selected';
		}
		this.selunselt = !this.selunselt;
		console.log(this.selunselt)
	}
})

.controller("showHideCtrl", ['prevSelected', function($scope, $watch, prevSelected){
	this.sel = null;
	this.num = 0 ;
	this.prevval = 0;
	console.log(this.prevSel);
	//console.log(prevSelected);
	this.expandthis = function(rowindex, rowid, rowelement){
		/*console.log(prevSelected)
		$scope.sel = rowid;
		angular.element(rowevent.target).addClass('selected');
		if(prevSelected != ''){
			var prevSelDiv = angular.element( document.querySelector( '#'+prevSelected ) );
			prevSelDiv.removeClass('selected');
			prevSelected = rowid;
		}
		*/
		this.num = rowindex;
		this.ell = rowelement
		console.log(this.prevSel);
	}
	this.removePrevSel = function(){
		this.prevval = this.num;
	}
}])
.directive("prevVal", function($animate){
	return function(scope, element, attrs){
		scope.$watch(attrs.prevval, function(newVal){
			$animate.removeClass(element, "selected")
		})
	}
});