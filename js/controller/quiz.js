(function() {
	angular
		.module('quizFacts')
		.controller('quizCtrl', QuizController);

		QuizController.$injector = ['quizMetrics', 'dataService'];

		function QuizController(quizMetrics,dataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.dataService = dataService;
		}
})();