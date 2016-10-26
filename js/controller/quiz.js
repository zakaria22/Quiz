(function() {
	angular
		.module('quizFacts')
		.controller('quizCtrl', QuizController);

		QuizController.$injector = ['quizMetrics', 'dataService'];

		function QuizController(quizMetrics,dataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.dataService = dataService;

			vm.setActiveQuestion = setActiveQuestion;
			vm.questionAnswered = questionAnswered;
			vm.selectAnswer = selectAnswer;
			vm.activeQuestion = 0;

			var numQuestionsAnswered = 0;

			function setActiveQuestion(index) {
				if (index === undefined) {
					var breakOut = false;
					var quizLength = dataService.quizQuestions.length - 1;

					while (!breakOut) {
						vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion:0;

						if (dataService.quizQuestions[vm.activeQuestion].selected === null) {
							breakOut = true;
						}
					}
				}else{
					vm.activeQuestion = index;
				}
			}

			function questionAnswered(){
				var quizLength = dataService.quizQuestions.length;

				if( dataService.quizQuestions[vm.activeQuestion].selected !== null){
					numQuestionsAnswered++;
					if(numQuestionsAnswered >= quizLength){

					}
				}

				vm.setActiveQuestion();
			}

			function selectAnswer(index) {
				dataService.quizQuestions[vm.activeQuestion].selected = index;
			}
		}
})();