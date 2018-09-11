$(document).ready(function () 
{
    $('.btn-main-menu').click(function()
    {
        $('.main-menu').hide()
    })
        
        
	var quizData = {}
    var questionNumber=0;
    var questionContainer = "#questionContainer1"
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
    const diaDaSemana="dia_da_semana"
    const nivelDeAutoconfianca = "nivel_de_autoconfianca"
    
    var questionContainer2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
     
    $.getJSON('./assets/js/data.json', function(data) 
    {
        quizData = data.quizData;
        numberOfQuestions=data.quizData.length; 
        displayQuestion()
    })//gtjson
    
function displayQuestion()
{
    displayStatus()
    displayBackground()
    showPopup()
    
    var tempQuestion = quizData[questionNumber][questionText]
    var tempOption1 = quizData[questionNumber][answers][0][content]
    $(questionContainer).append('<div id="question">'+tempQuestion+'</div>')
    $(questionContainer).append('<div class="option" id="option1">'+tempOption1+'</div>')
    
    if (quizData[questionNumber][answers][1])
    {
        $(questionContainer).append('<div class="option" id="option2">'+quizData[questionNumber][answers][1][content]+'</div>')
    }
    
    $('.option').click(function()
    {
        if(questionLock==false)
        {
            questionLock=true;	
            var showAfter = showPopup()
            if (showAfter == false) changeQuestion()
        }})
}

function displayStatus()
{
    var tempData        = quizData[questionNumber][diaDaSemana]
    var tempConfianca   = 'Autoconfiança '+quizData[questionNumber][nivelDeAutoconfianca]
    $("#status_data").text(tempData)
    $("#status_autoconfianca").text(tempConfianca)
}


function displayBackground()
{
    var tempBackground = quizData[questionNumber]['cenario']
    $('body').css({"background":"url(../assets/interface/status_images/Final_"+tempBackground+"_CiaDeEstagios.jpg) no-repeat center center fixed"});  
    $('body').css({"-webkit-background-size":"cover"});
    $('body').css({"-moz-background-size":"cover"});
    $('body').css({"-o-background-size":"cover"});
    $('body').css({"background-size":"cover"});
}


    
function changeQuestion(){
	
	questionNumber++;
	$(questionContainer).empty()
	questionLock=false
	displayQuestion()
	return

if(questionContainer=="#questionContainer1"){questionContainer2="#questionContainer1";questionContainer="#questionContainer2";}
	else{questionContainer2="#questionContainer2";questionContainer="#questionContainer1";}

if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}

 $(questionContainer2).animate({"right": "+=50%"},"slow", function() {$(questionContainer2).css('right','-1080px');$(questionContainer2).empty();});
 $(questionContainer).animate({"right": "+=50%"},"slow", function() {questionLock=false;});
}//change question

function displayFinalSlide(){

	$(questionContainer).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
	
}//display final slide
    	
function showPopup()
{
    if (!quizData[questionNumber]['texto_popup']) return false
    if (quizData[questionNumber]['texto_popup'][0]['when_to_show'] === 'after' && questionLock==false) return true
    if (quizData[questionNumber]['texto_popup'][0]['when_to_show'] === 'before' && questionLock==true) return false
    
    var tempTitulo = quizData[questionNumber]['texto_popup'][0]['titulo']
    var tempContent = quizData[questionNumber]['texto_popup'][0]['content']

    $(".modal-content").html("<b>"+tempTitulo+"</b><br/>"+tempContent)

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            if (quizData[questionNumber]['texto_popup'][0]['when_to_show'] === 'after')
            {
                changeQuestion()
                return true
            }
        }
    }
}

});