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

.controller('shCtrl', function($scope){
	this.selunselt = true;
	//console.log(this.selunselt)
	$scope.selunsel = function(){
		if(this.selunselt){
			$scope.selunselc = 'unselected';
		}
		else{
			$scope.selunselc = 'selected';
		}
		this.selunselt = !this.selunselt;
		//console.log(this.selunselt)
	}
	//$scope.$watch()
})

coApp.directive("contentBoxes", function(){
	var DomListenerFn = function(scope,element,attrs){
		var zoomout1 = function(){
			//console.log(this);
			//alert('hi');
			$(this).animate({
				height: '+=50'
			})
		};
		//console.log($('div.Pending').on('click', zoomout1));
		console.log('sdf');
		//$('#build_432462').on('click', zoomout1);
		//$('#build_432462').trigger('click');
		$('#one').on('click', zoomout1);
		//$('#one').trigger('click')
	};

	return{
		replace: false,
		restrict: 'AEC',
		controller: 'shCtrl',
		link: DomListenerFn,
		transclude: false
	}
})
