(function() {
	angular
		.module('quizFacts')
		.controller('quizCtrl', QuizController);

		QuizController.$injector = ['quizMetrics'];

		function QuizController(quizMetrics){
			var vm = this;

			vm.quizMetrics = quizMetrics;
		}
})();