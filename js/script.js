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
            "title": "Parei de usar Internet Explorer",
            "link": "",
            "category": "Realização",
            "year": 2010,
            "description": "Digno de nota, sim?"
        },
        {
            "title": "Curso Programador Web Senac",
            "link": "http://www.es.senac.br/cursos/informatica/programador_web.html",
            "category": "Curso",
            "year": 2011,
            "description": "Meu primeiro curso presencial da área. Fizemos um site com página inicial e formulário de contato, aprendemos principalmente HTML e CSS, mas também um pouco de PHP, Flash e MySQL."
        },
        {
            "title": "Estágio Home Office",
            "link": "http://www.dmxweb.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2011,
            "description": "Primeiro estágio da área. Falava com a equipe pelo skype e o trabalho consistia principalmente na edição e atualização de websites."
        },
        {
            "title": "Eloquent Javascript",
            "link": "",
            "category": "Livro",
            "year": 2016,
            "description": "Li este livro até a parte de NodeJS, que pretendo ler daqui alguns meses, quando eu começar meus estudos de NodeJS. Fiz várias anotações e exercícios para me ajudar a fixar a matéria. Como eu me formei em Design Gráfico, não vi teoria de programação, então ler e estudar livros como este me ajuda a saber os nomes certos das coisas."
        }
    ]
});