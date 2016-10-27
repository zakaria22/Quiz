(function(){
	angular
		.module('quizFacts')
		.controller('resultCtrl', ResultController);

		ResultController.$injector = ['quizMetrics', 'dataService']

		function ResultController(quizMetrics,dataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.dataService = dataService;
			vm.activeQuestion = 0;
			vm.getAnswerClass = getAnswerClass;
			vm.setActiveQuestion = setActiveQuestion;
			vm.percent = percent;
			vm.reset = reset;

			function getAnswerClass(index){
				if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
					return "bg-success"
				}else if(index === dataService.quizQuestions[vm.activeQuestion].selected){
					return "bg-danger"
				}
			}

			function setActiveQuestion(index){
				vm.activeQuestion = index;
			}

			function percent(){
				return quizMetrics.numCorrect / dataService.quizQuestions.length * 100;
			}

			function reset(){
				quizMetrics.changeState("result", false);
				quizMetrics.numCorrect = 0; 

				for (var i = 0; i < dataService.quizQuestions.length; i++) {
					var data = dataService.quizQuestions[i];

					data.selected = null;
					data.correct = null;
				}
			}
		}
})();