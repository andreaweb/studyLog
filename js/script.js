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

	// $scope.filtergamesByTitle = function(title){
  //              $scope.search = title;
  //   };
	//
	// $scope.filtergamesByCategory = function(category){
  //              $scope.search = category;
  //   };
	//
	// $scope.filtergamesByYear = function(year){
  //              $scope.search = year;
  //   };

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
            "title": "Eu não sou ninja!",
            "link": "",
            "category": "Realização",
            "year": 2015,
            "description": "Ao iniciar nesta área, eu sofria da ilusão de que poderia ser boa em tudo, bastando para isso me esforçar. Claro, eu ainda acho que posso ser boa em muitas coisas, mas ao final de 2015 eu percebi que minha sede de conhecimento estava me atrapalhando, pois eu estudava múltiplos assuntos o tempo inteiro sem me aprofundar em nenhum. O resultado é que eu estava bem medíocre em tudo. Foi então que percebi que precisava de um foco e que esse foco seria desenvolvimento front-end."
        },
        {
            "title": "Curso Programador Web Senac",
            "link": "http://www.es.senac.br/cursos/informatica/programador_web.html",
            "category": "Curso",
            "year": 2011,
            "description": "Meu primeiro curso presencial da área. Fizemos um site com página inicial e formulário de contato, aprendemos principalmente HTML e CSS, mas também um pouco de PHP, Flash e MySQL."
        },
				{
            "title": "Graduação em Design Gráfico/Digital",
            "link": "http://graduacao.infnet.edu.br/graduacao-design-grafico/?gclid=Cj0KEQiAlsrFBRCAxcCB54XElLEBEiQA_ei0DKt1oSioZpP4XAOj7oEjxhSQ9KbWOzZPd5ziV8O93SwaAuyT8P8HAQ",
            "category": "Curso",
            "year": 2012,
            "description": "Foram vários meses estudando para o ENEM para conseguir o ProUni! O curso foi bem bacana, porém reforçou minha falta de foco. A cada trimestre aprendíamos diferentes conceitos e softwares: ilustração digital e manual, edição de vídeo, animação, design de livro, webdesign, etc... Eu ficava encantada com tudo e estudava de tudo um pouquinho. Hoje acho que teria sido melhor me focar em uma coisa, mas hey, já passou e estou compensando o tempo perdido =)"
        },
				{
						"title": "Pix Studios - Videografismo",
						"link": "",
						"category": "Curso",
						"year": 2012,
						"description": "Aprendi muito sobre 3D e vídeo neste curso. Conhecimentos que hoje não uso, mas que curto e pretendo usar de forma ocasional."
				},
				{
            "title": "Curso Boostrap - Lynda",
            "link": "",
            "category": "Curso",
            "year": 2015,
            "description": "Logo nos primeiros dias de 2015, eu assisti aos vídeos deste curso. Na segunda ou terceira semana de janeiro, apareceu um projeto de site responsivo no meu estágio e eu não tive dúvidas: ia usar Bootstrap para fazê-lo. Foi bacana ver que aprendi tão rápido (apesar de hoje notar vários errinhos no meu código na época, claro)."
        },
				{
            "title": "Curso React com Wes Bos",
            "link": "https://reactforbeginners.com/",
            "category": "Curso",
            "year": 2016,
            "description": "Através deste curso entendi o básico de React para aplicar em um projeto do emprego na época."
        },
				// {
				// 		"title": "Certificação Front-End",
				// 		"link": "",
				// 		"category": "Curso",
				// 		"year": 2016,
				// 		"description": "O Free Code Camp pode não ser considerado um curso, mas simplesmente uma plataforma para se treinar desenvolvimento web, do básico ao avançado. Este certificado, adquirido em dezembro de 2016, demonstra que completei a parte Front-End do site (HTML, CSS, Bootstrap, Javascript, Ajax)."
				// },
        {
            "title": "Estágio Home Office",
            "link": "http://www.dmxweb.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2013,
            "description": "Primeiro estágio da área. Falava com a equipe pelo skype e o trabalho consistia principalmente na edição e atualização de websites."
        },
				{
            "title": "Estágio Faz-Tudo",
            "link": "http://inpressmarketing.blogspot.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2014,
            "description": "Oficialmente, era um estágio em web design, mas na realidade eu trabalhei a maior parte do tempo com desenvolvimento front-end. Fiz, ainda, várias outras coisas: atendi clientes, editei vídeos, modelei 3D, montei adesivo de aniversário brega e até plastifiquei documento."
        },
				{
            "title": "Software de Gestão de Compras",
            "link": "http://www.coobo.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2015,
            "description": "Aqui eu trabalhei como única front-end do time, construindo um sistema com Boostrap e bastante Javascript. Foi uma experiência curtinha, mas reveladora, pois foi lá que comecei a usar metodologia ágil e controle de versão."
        },
				{
            "title": "E-mail Marketing para Grandes Empresas",
            "link": "http://www.repense.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2015,
            "description": "PSDs para HTML (e-mail), incluindo testes de envio. Tive que sair porque era muito <table><tr><td> para uma vida."
        },
				{
            "title": "Desenvolvendo muuuuuito",
            "link": "http://www.stormsec.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2016,
            "description": "Nessa experiência eu usei bastante Javascript, incluindo um pouco de React com ES6. Trabalhei em equipe e sozinha, participei de reuniões com grandes clientes e fui discriminada por usar terminal branco (ainda uso, inclusive)."
        },
				{
            "title": "Sistema para transportes",
            "link": "http://www.m2msolutions.com.br/",
            "category": "Experiência de Trabalho",
            "year": 2017,
            "description": "Quando cheguei, o CSS tinha escalado de um jeito não muito agradável. Estou arregaçando as mangas para tentar mudar essa realidade, implementando Sass e BEM."
        },
        {
            "title": "Eloquent Javascript",
            "link": "http://eloquentjavascript.net/",
            "category": "Livro",
            "year": 2016,
            "description": "Li este livro até a parte de NodeJS, que pretendo ler daqui alguns meses, quando eu começar meus estudos de NodeJS. Fiz várias anotações e exercícios para me ajudar a fixar a matéria. Como eu me formei em Design Gráfico, não vi teoria de programação, então ler e estudar livros como este me ajuda a saber os nomes certos das coisas."
        },
        {
            "title": "You Don't Know JS",
            "link": "https://github.com/getify/You-Dont-Know-JS",
            "category": "Livro",
            "year": 2016,
            "description": "Li 4 de 6 dos livros dessa série maravilhosa, mas o fiz de forma superficial. Voltarei a lê-los com mais atenção e também para tomar notas."
        },
        {
            "title": "Beginning JavaScript with DOM Scripting and Ajax, 2nd Edition",
            "link": "",
            "category": "Livro",
            "year": 2016,
            "description": "Estou na página 247 deste livro e confesso que até o momento achei um pouco chato, mas pretendo insistir e terminá-lo."
        },
        {
            "title": "HTML5 e CSS3 - Domine a web do futuro",
            "link": "https://www.casadocodigo.com.br/products/livro-html-css",
            "category": "Livro",
            "year": 2017,
            "month": ["Fevereiro", 02],
            "description": "Achei esse livro bem basiquinho, algumas partes acabei lendo superficialmente. Mas curti como fonte de iniciantes na área que costumam me pedir umas dicas."
        }

    ]
});
