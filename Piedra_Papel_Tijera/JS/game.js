//Referencias a elementos HTML
let   userScore_html     = document.getElementById("user_score");
let   computerScore_html = document.getElementById("computer_score");
let   results_html       = document.getElementById("results");
const scoreBoard_html    = document.getElementById("score_board");
const choice_rock        = document.getElementById("choice_rock");
const choice_paper       = document.getElementById("choice_paper");
const choice_scsissors   = document.getElementById("choice_scsissors");

//Incializar contadores
let user_score     = 0;
let computer_score = 0;


//Eleccion de la computadora
function get_computerChoice(){
    const choices      = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//Escucha de eventos para saber que eleccion tuvo el usuario
choice_rock.addEventListener('click', function(){
    game('rock');
 })
 
 
 choice_paper.addEventListener('click', function(){
     game('paper');
 })
 
 
 choice_scsissors.addEventListener('click', function(){
     game('scissors')
 })
 


//Inicializar el juego
function game(userChoice){
    const computerChoice = get_computerChoice();
    switch(userChoice + computerChoice){

        case "rockscissors" :
        case "paperrock"    :
        case "scissorspaper":
        userWins(userChoice, computerChoice);
        break;

        case "scissorsrock"  :
        case "rockpaper"     :
        case "paperscissors":
        userLost(userChoice, computerChoice);
        break;

        case "rockrock"        :
        case "paperpaper"      :
        case "scissorsscissors":
        draw(userChoice, computerChoice);
        break;
    }

}

function userWins(userChoice, computerChoice){
    user_score++;
    userScore_html.innerHTML     = user_score;
    computerScore_html.innerHTML = computer_score;
    results_html.innerHTML       = userChoice + " beats " + computerChoice + ".  You win! ";
}

function userLost(userChoice, computerChoice){
    computer_score++;
    computerScore_html.innerHTML = computer_score;
    userScore_html.innerHTML     =  user_score;
    results_html.innerHTML       = computerChoice + " beats " + userChoice + ". You lost.";
}

function draw(userChoice, computerChoice){
    results_html.innerHTML =  "There was a draw";
}