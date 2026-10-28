const rock_click = document.querySelector('#rock');
const paper_click = document.querySelector('#paper');
const seisor_click = document.querySelector("#seisor");
const result = document.querySelector('#score');
const result_score = document.querySelector('#result_score');
const emogy = document.querySelector('#emogy-stor');
const reset = document.querySelector('#reset');
const div_score = document.querySelector('#div_score');



function computerchoice() {
    let random = Math.random();

    if (random >= 0 && random < 1 / 3) {
        return "paper";
    }
    else if (random > 1 / 3 && random < 2 / 3) {
        return "rock";
    }
    else {
        return "seisor";
    }
}

const object = {
    wins: 0,
    loses: 0,
    tie: 0,

};
reset.onclick = function () {

    object.loses = 0;
    object.wins = 0;
    object.tie = 0;
    result.innerHTML = `wins:${object.wins},loses:${object.loses}, Tie:${object.tie}`;
}

result.innerHTML = `wins:${object.wins},loses:${object.loses}, Tie:${object.tie}`;


rock_click.onclick = function () {

    let computer_choice = computerchoice();

    if (computer_choice == "rock") {
        result_score.innerHTML = "Result: Tie";

        object.tie += 1;


    }
    else if (computer_choice == "paper") {

        result_score.innerHTML = "  Result: You Lose";
        object.loses += 1;
    }

    else if (computer_choice == "seisor") {

        result_score.innerHTML = " Result: You Win";
        object.wins += 1;
    }
    result.innerHTML = `wins:${object.wins},loses:${object.loses}, Tie:${object.tie}`;

    emogy.innerHTML = `You
     <img src="rock.png" class="icon"> Vs 
    <img src="${computer_choice}.png" class="icon"  >Computer
   `;

    if (result_score.innerHTML == " Result: You Win") {
        div_score.style.color = "rgb(0,100,0)";
        div_score.style.backgroundColor = "rgb(100,255,100)"
        div_score.style.border = "1px solid green";
    }
    else if (result_score.innerHTML == "  Result: You Lose") {
        div_score.style.color = "rgb(120,0,0)";
        div_score.style.backgroundColor = "rgb(255,50,50)"
        div_score.style.border = "1px solid red";
    }
    else {
        div_score.style.color = "rgb(100,70,0)";
        div_score.style.backgroundColor = "rgb(255,230,0)"
        div_score.style.border = "1px solid yellow";
    }
}
paper_click.onclick = function () {
    let computer_choice = computerchoice();

    if (computer_choice == "rock") {
        result_score.innerHTML = "  Result: You Win";
        object.wins += 1;
    }
    else if (computer_choice == "paper") {

        result_score.innerHTML = " Result:Tie";
        object.tie += 1;
    }

    else if (computer_choice == "seisor") {

        result_score.innerHTML = " Result: You Lose";
        object.loses += 1;
    }
    result.innerHTML = `wins:${object.wins},loses:${object.loses}, Tie:${object.tie}`;

    emogy.innerHTML = `You 
     <img src="paper.png" class="icon"> Vs 
    <img src="${computer_choice}.png" class="icon" >Computer`;


    if (result_score.innerHTML == "  Result: You Win") {
        div_score.style.color = "rgb(0,100,0)";
        div_score.style.backgroundColor = "rgb(100,255,100)"
        div_score.style.border = "1px solid green";
    }
    else if (result_score.innerHTML == " Result: You Lose") {
        div_score.style.color = "rgb(120,0,0)";
        div_score.style.backgroundColor = "rgb(255,50,50)"
        div_score.style.border = "1px solid red";
    }
    else {
        div_score.style.color = "rgb(100,70,0)";
        div_score.style.backgroundColor = "rgb(255,230,0)"
        div_score.style.border = "1px solid yellow";
    }

}

seisor_click.onclick = function () {

    let computer_choice = computerchoice();

    if (computer_choice == "rock") {
        result_score.innerHTML = " Result: You Lose";

        object.loses += 1;

    }
    else if (computer_choice == "paper") {

        result_score.innerHTML = " Result: You Win";
        object.wins += 1;
    }

    else if (computer_choice == "seisor") {

        result_score.innerHTML = " Result: Tie";
        object.tie += 1;
    }
    result.innerHTML = `wins:${object.wins},loses:${object.loses}, Tie:${object.tie}`;
    emogy.innerHTML = `You
     <img src="seisor.png" class="icon" > Vs 
    <img src="${computer_choice}.png" class="icon" >Computer
   `;

    if (result_score.innerHTML == " Result: You Win") {
        div_score.style.color = "rgb(0,100,0)";
        div_score.style.backgroundColor = "rgb(100,255,100)"
        div_score.style.border = "1px solid green";
    }
    else if (result_score.innerHTML == " Result: You Lose") {
        div_score.style.color = "rgb(120,0,0)";
        div_score.style.backgroundColor = "rgb(255,50,50)"
        div_score.style.border = "1px solid red";
    }
    else {
        div_score.style.color = "rgb(100,70,0)";
        div_score.style.backgroundColor = "rgb(255,230,0)"
        div_score.style.border = "1px solid yellow";
    }
}
