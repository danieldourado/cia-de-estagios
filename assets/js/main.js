$(document).ready(function () 
{
	var quizData = {}
    var questionNumber=0;
    const questionContainer = "#questionContainer"
    const questionDiv="#question";
    const option1="#option1";
    const option2="#option2";
    const questionText = "texto_main_ui"
    const textoPopup = "texto_popup"
    const titulo = "titulo"
    const content = "content"
    const when_to_show = "when_to_show"
    const show_condition = "show_condition"
    const answers = "answers"
    const value = "value"
    
    
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
     
    $.getJSON('./assets/js/data.json', function(data) 
    {
        quizData = data.quizData;
        numberOfQuestions=data.quizData.length; 
        displayQuestion();
    })//gtjson
    
function displayQuestion()
{
    var tempQuestion = quizData[questionNumber][questionText]
    var tempOption1 = quizData[questionNumber][answers][0][content]
    $(questionContainer).append('<div id="question">'+tempQuestion+'</div>')
    $(questionContainer).append('<div class="option" id="option1">'+tempOption1+'</div>')
    if (quizData[questionNumber][answers][1])
    {
        $(questionContainer).append('<div class="option" id="option2">'+quizData[questionNumber][answers][1][content]+'</div>')
    }
    return
    
    $('.option').click(function()
    {
        if(questionLock==false)
        {
            questionLock=true;	
            //correct answer
            if(this.id==rnd)
            {
                $(stage).append('<div class="feedback1">CORRECT</div>');
                score++;
            }
            //wrong answer	
            if(this.id!=rnd)
            {
                $(stage).append('<div class="feedback2">WRONG</div>');
            }
            setTimeout(function(){changeQuestion()},1000);
        }})
}//display question
    
    	
    	
    	
    	
    	
    	function changeQuestion(){
    		
    		questionNumber++;
    	
    	if(stage=="#game1"){stage2="#game1";stage="#game2";}
    		else{stage2="#game2";stage="#game1";}
    	
    	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
    	
    	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
    	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
    	}//change question
    	
    
    	
    	
    	function displayFinalSlide(){
    		
    		$(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
    		
    	}//display final slide
    	
    	
    	
    	
    	
    	
    	
});//doc ready