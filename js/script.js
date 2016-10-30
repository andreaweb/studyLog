var app = angular.module('studyLog', []);
app

app.controller('logController', function ($scope) {
	
  	$scope.rate1 = 3;
   	$scope.rate2 = 6;
   	$scope.search = "";
	$scope.order = "-year";
	$scope.selectedIndex = null;
	$scope.selecteditems = null;
	$scope.filters = { };

	$scope.filtergamesByTitle = function(title){
               $scope.search = title;
    };
	
	$scope.filtergamesByCategory = function(category){
               $scope.search = category;
    };
	
	$scope.filtergamesByYear = function(year){
               $scope.search = year;
    };

	$scope.filter = 'title';
    
    $scope.getFilter = function() {
        var filter = {};
        filter[$scope.filter] = $scope.search;
        return filter;
    };

	$scope.category = ["Livro", "Curso", "Realização","Experiência de Trabalho" ];
	$scope.year = [2016, 2015, 2014,2013, 2012, 2011, 2010];
	$scope.items = [

		{
			"title": "Curso Programador Web Senac",
			"link": "http://www.es.senac.br/cursos/informatica/programador_web.html",
			"category": "Curso",
			"year": 2011,
			"description": "Meu primeiro curso presencial da área. Fizemos um site com página inicial e formulário de contato, aprendemos principalmente HTML e CSS, mas também um pouco de PHP, Flash e MySQL."
		}
    ]
});