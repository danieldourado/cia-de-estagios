$(document).ready(function () 
{
    setTimeout(showSplashScreen, 2000);
    $('#main-menu').hide()
    $('#main-content-container').hide()
    $('.footer').hide()
    
    
    $('.btn-main-menu').click(function()
    {
        $('#main-menu').hide()
        $('#main-menu-background').hide()
        
        $("#BGM_music_theme_song_v02")[0].play();
        $('#main-content-container').show()
        $('.footer').show()
        displayQuestion()
    })
    
	var quizData = {}
	var resultsData = {}
	var answersData = {}
	var tipsData = {}
    var questionNumber=0;
    var questionContainer = "#questionContainer1"
    const questionDiv="#question";
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
    const option1="option1"
    const option2="option2"
    var difficultyData = {}
    var total = 0
    var facil = 0
    var dificil = 0
    
    var questionContainer2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
     
    $.getJSON('./assets/js/data.json', function(data) 
    {
        quizData = data.quizData;
        resultsData = data.resultsData
        tipsData = data.tipsData
        numberOfQuestions=data.quizData.length; 
    })
    $('#BGM_music_theme_song_v02').prop("volume", 0.5);

    registerSoundOnButton()
    
    $.get( "https://theglitchfactory.com.br/ciadeestagios/backend/index.php?data=difficultyData", function( data ) {
        difficultyData = data
        total = parseInt(difficultyData['facil'])+parseInt(difficultyData['dificil'])
        facil = parseInt(difficultyData['facil']/total*100)
        dificil = parseInt(difficultyData['dificil']/total*100)
    }, "json" );
    
function displayQuestion()
{
    displayStatus()
    displayBackground()
    showPopup()
    
    var tempQuestion = quizData[questionNumber][questionText]
    var tempOption1 = quizData[questionNumber][answers][0][content]
    $(questionContainer).append('<hr></hr>')
    $(questionContainer).append('<div id="question" class="question">'+tempQuestion+'</div>')
    $(questionContainer).append('<div class="option-question option-click-class" id="'+option1+'"><svg class="svg-icon" aria-hidden="true" data-prefix="fas" data-icon="chevron-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-circle-right fa-w-16 fa-2x"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" ></path></svg><span>&nbsp;&nbsp;&nbsp;'+tempOption1+'</span></div>')
    
    if (quizData[questionNumber][answers][1])
    {
        $(questionContainer).append('<div class="option-question option-click-class" id="'+option2+'"><svg class="svg-icon"  aria-hidden="true" data-prefix="fas" data-icon="chevron-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-circle-right fa-w-16 fa-2x"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" ></path></svg><span>&nbsp;&nbsp;&nbsp;'+quizData[questionNumber][answers][1][content]+'</span></div>')
    }
    $('.footer').hide()
    $('.footer').fadeIn(1000)
    registerSoundOnButton()
    $('#SFX_feedback_screen_swoosh')[0].play()
    $('.option-click-class').click(function()
    {
        if(questionLock==false)
        {
            questionLock=true;	
            registerAnswer(this.id)
            var showAfter = showPopup(this.id)
            if (showAfter == false) changeQuestion()
        }})
}

function registerAnswer(answerId)
{
    if (!quizData[questionNumber][answers][0]['item']) return
    
    var tempItem = "0"
    var tempPontua = "z"
    if(answerId == option1)
    {
        tempItem = quizData[questionNumber][answers][0]['item']
        tempPontua = quizData[questionNumber][answers][0]['pontua']
    }
    if(answerId == option2)
    {
        tempItem = quizData[questionNumber][answers][1]['item']
        tempPontua = quizData[questionNumber][answers][1]['pontua']        
    }
    if (!answersData[tempItem]) answersData[tempItem] = {}
    if (!answersData[tempItem][tempPontua]) 
    {
        answersData[tempItem]["a"] = 0
        answersData[tempItem]["b"] = 0
    }    
    
    answersData[tempItem][tempPontua] += 1
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
    if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
/*
if(questionContainer=="#questionContainer1"){questionContainer2="#questionContainer1";questionContainer="#questionContainer2";}
	else{questionContainer2="#questionContainer2";questionContainer="#questionContainer1";}


 $(questionContainer2).animate({"right": "+=50%"},"slow", function() {$(questionContainer2).css('right','-1080px');$(questionContainer2).empty();});
 $(questionContainer).animate({"right": "+=50%"},"slow", function() {questionLock=false;});
 */
}
function showPopup(questionID = "1")
{
    
    if (!quizData[questionNumber]['texto_popup']) return false
    if (quizData[questionNumber]['texto_popup'][0]['when_to_show'] === 'after' && questionLock==false) return true
    if (quizData[questionNumber]['texto_popup'][0]['when_to_show'] === 'before' && questionLock==true) return false
    
    var lastChar = questionID.substr(questionID.length - 1)
    var tempTitulo  = ""
    var tempContent = ""
    
    if( (quizData[questionNumber]['texto_popup'][0]['show_condition'] == lastChar) || 
        (quizData[questionNumber]['texto_popup'][0]['show_condition'] == 'none'))
    {
        tempTitulo = quizData[questionNumber]['texto_popup'][0]['titulo']
        tempContent = quizData[questionNumber]['texto_popup'][0]['content']
    }
    if( quizData[questionNumber]['texto_popup'][1])
    {
        if( quizData[questionNumber]['texto_popup'][1]['show_condition'] == lastChar)
        {
            tempTitulo = quizData[questionNumber]['texto_popup'][1]['titulo']
            tempContent = quizData[questionNumber]['texto_popup'][1]['content']        
        }
    }
    
    if (tempContent == "") return false
    
    var hasSound = quizData[questionNumber]['texto_popup'][0]['play_sound']
    if(hasSound)$('#'+hasSound)[0].play()
    
    var finalHTML = "<hr></hr>"
    
    if (tempTitulo) finalHTML = "<b>"+tempTitulo+"</b><br/>"+tempContent
    else finalHTML = tempContent
    
    var buttonHtml = '<div class="row justify-content-center align-items-center"><div id="myBtn"class="option btn-main-menu popup-button">Clique para avançar</div></div>'
    finalHTML += buttonHtml
    $(".modal-content").html(finalHTML)
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    //modal.style.display = "block";
    $("#myModal").fadeIn(400)
    document.addEventListener('touchstart', onPopupClick);
    window.onclick = onPopupClick;
    function onPopupClick(event) {
        if (event.target == btn) {
            modal.style.display = "none";
            //$("#myModal").fadeOut( 400)
            $("#SFX_interface_click_popup")[0].play();
            if (quizData[questionNumber]['texto_popup'][0]['when_to_show'] === 'after')
            {
                changeQuestion()
                return true
            }
        }
    }
}

function displayFinalSlide()
{
    $('#main-menu-background').show()
    var resultsArray = getResultsArray(answersData)
    var finalHTML = "<div class='row justify-content-center align-items-center'><img class='profile-icon' src='./assets/interface/Stat_ProfileIcon.png'></div>"
    finalHTML += "<div class='media-geral'><div class='row result'>Média Geral</div><div class='row result'>FÁCIL-"+facil+"%</div><div class='row result'>DIFÍCIL-"+dificil+"%</div></div>"
    finalHTML +="<div class='row justify-content-center align-items-center'>Perfil do usuário</div>"
    finalHTML += "<div class='justify-content-center align-items-center'><hr></div>"
    for (var result in resultsArray)
    {
        if(resultsArray[result] == "none") continue
        finalHTML += "<div class='result'>"+resultsArray[result]+"</div>"
    }
    finalHTML += '<div class="row justify-content-center align-items-center"><div class="option btn-main-menu" id="myBtn">Avançar</div></div>'
    $(".modal-content").html(finalHTML)

    $('#SFX_feedback_results')[0].play()
    
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    //modal.style.display = "block";
    $("#myModal").fadeIn(400)
    document.addEventListener('touchstart', onPopupClick);
    window.onclick = onPopupClick;
    function onPopupClick(event) {
        if (event.target == btn) {
            displayTips()
            }
        }
}

function displayTips()
{
    var finalHTML = "<div class='row justify-content-center align-items-center dica-word'>DICAS</div>"
    finalHTML += "<div class='justify-content-center align-items-center'><hr></div>"
    
    finalHTML +="<div style='text-align: center;'>"+tipsData['title']+"</div>"
    for (var tips in tipsData['tips'])
    {
        finalHTML += "<div class='result'>"+tipsData['tips'][tips]+"</div>"
    }
    finalHTML += "<div class='justify-content-center align-items-center'><hr></div>"
    finalHTML +="<div style='text-align: center;'>"+tipsData['ending']+"</div>"
    finalHTML += '<div class="row justify-content-center align-items-center"><div class="option btn-main-menu" id="myBtn">Fim</div></div>'
    //finalHTML += '<div class="row justify-content-center align-items-center"><div class="option btn-main-menu" id="myBtn">Finalizar</div></div>'
    $(".modal-content").html(finalHTML)

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == btn) {
            modal.style.display = "none";
            }
        }    
}

function getResultsArray(answersData)
{
    var answersArray = []
    for(var item in answersData)
    {
        if(answersData[item]['a'] > answersData[item]['b']) answersArray.push(resultsData[parseInt(item)-1]['result'][0]['content'])
        if(answersData[item]['a'] < answersData[item]['b']) answersArray.push(resultsData[parseInt(item)-1]['result'][1]['content'])
    }
    return answersArray
}

function registerSoundOnButton()
{
    $(".option").mouseenter(function() {
      $("#SFX_interface_mouse_over")[0].pause();
      $("#SFX_interface_mouse_over")[0].currentTime =0;
      
      $("#SFX_interface_mouse_over")[0].play();
    });    
    $(".option").click(function() {
      $("#SFX_interface_click_interface")[0].play();
    });
}
});

function showSplashScreen()
{
    $("#splash-screen-container").fadeOut( 1000, function()
    {
        $("#splash-screen-container").empty()
        $("#splash-screen-container").append('<img src="./assets/interface/LogoCiaEstagio.png" class="mx-auto d-block img-fluid w-80"></img>')
        $("#splash-screen-container").fadeIn( 2000, function()
        {
            $("#splash-screen-container").fadeOut( 2000, function()
            {
                $("#splash-screen-container").empty()
                $("#splash-screen-container").append('<img src="./assets/interface/Logo Grande.png" class="mx-auto d-block img-fluid w-80"></img>')
                $("#splash-screen-container").fadeIn( 2000, function()
                {
                    $("#splash-screen-container").fadeOut( 2000, function()
                    {
                        $("#splash-screen-container").empty()
                        $('#splash-screen').hide()
                        $('#main-menu').show()
                    });
                });
            });
        });
        
    });
}