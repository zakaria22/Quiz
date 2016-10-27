(function(){
	/**
	*  Module : quizFacts
	*
	*  Description : unlike the app.js module, we dont pass the second parameter
	*  				 cuz this time we wanna fetch the "quizFacts" module which is defined on our app.js
	*  				 it will be returned to us, so we can add other methods
	*/
	angular
		.module('quizFacts')
		.controller('listCtrl',ListController)
	;

	// instance of the QuizMetrics Factory
	ListController.$injector = ['quizMetrics', 'dataService'];

	function ListController(quizMetrics,dataService) {
		var view_model = this;
		
		view_model.quizMetrics = quizMetrics;

		view_model.data   = dataService.turtlesData;
		view_model.active = {};
		view_model.changeActiveTurtle = changeActiveTurtle;
		view_model.search = "";
		view_model.activateQuiz = activateQuiz;


		// get the active (turtle) when "more info" 
		// button is clicked 
		function changeActiveTurtle(index){
			view_model.active = index;
		}

		/**
		 * The reason why it's independent -> 
		 * it's injected to the controller
		 */
		function activateQuiz(){
			// view_model.quizMetrics.quizActive = true;
			quizMetrics.changeState("quiz",true);
		}
	}


	

})();