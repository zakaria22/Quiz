(function(){
	angular
		.module('quizFacts')
		.factory('quizMetrics', QuizMetrics);

		QuizMetrics.$injector = ['dataService']

		function QuizMetrics(dataService) {
			var quizObj = {
				quizActive: false,
				resultActive: false,
				changeState: changeState,
				correctAnswers: [],
				markQuiz: markQuiz,
				numCorrect: 0
			};

			return quizObj;

			function changeState(metric,state){
				if (metric === 'quiz') {
					quizObj.quizActive = state;
				}else if (metric === 'results') {
					quizObj.resultActive = state;
				}else{
					return false;
				}
			}

			function markQuiz(){
				quizObj.correctAnswers = dataService.correctAnswers;
				for (var i = 0; i < dataService.quizQuestions.length; i++) {
					if (dataService.quizQuestions[i].selected === dataService.correctAnswers[i] ) {
						dataService.quizQuestions[i].correct = true;
						quizObj.numCorrect++;
					}else{
						dataService.quizQuestions[i].correct = false;
					}
				}
			}
		}
})();