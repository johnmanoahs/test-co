var coApp = angular.module('coApp', []);

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

.controller("pieCtrl", function($scope){
	  $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v requests"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "10.0.0.80",
            values: [4660],
            backgroundColor: "#FA6E6E #FA9494",
        }, {
            text: "167.114.156.198",
            values: [1807],
            backgroundColor: "#F1C795 #feebd2"
        }]
    };
});

