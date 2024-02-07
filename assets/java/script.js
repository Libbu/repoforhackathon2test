function game() {

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors', 'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
    let userChoice = '';
    let sheldonChoice = '';

    const userChoiceElement = document.querySelector('.user-choice');
    const pickedElement = document.querySelector('.picked');
    const userPickedElement = document.querySelector('.user-pick');
    const sheldonPickedElement = document.querySelector ('.sheldon-pick')
    const resultElement = document.querySelector('.result');
    const resultTitleElement = resultElement.querySelector('.title');



    window.addEventListener('load', () => {

        document.querySelectorAll('.user-choice .game-card').forEach(card => {
            card.addEventListener('click', (event) => {
                userChoice = getUserChoice(event.target);
                sheldonChoice = getSheldonChoice()

                startGame();
            })
        })
    })

    function startGame() {
        calculateWinner(userChoice, sheldonChoice)
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden')
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, sheldonChoice);
    }

    function getUserChoice(target) {
        console.log(target);
        if (target.nodeName === "BUTTON") {
            //console.log( target.parentElement.classList[1]);//
        }
        return (target.classList[1]);
    }

    function getSheldonChoice() {
        return choices[Math.floor(Math.random() * 5)];
    }

    function calculateWinner(usercard, sheldoncard) {
        if (usercard === sheldoncard) {
            console.log('tie');
        } else if (getUserWinsStatus(usercard + sheldoncard)) {
            console.log('You Win');
        } else {
            console.log('you lose');
        }

    }



    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr === result);


    }
    
//function that builds user and sheldon choice elements using classname, function will need editing when images are added

    function buildChoiceElement (isItUserElement, className) {
        const choiceElement = document.createElement ('div');
        choiceElement.classList = [`game-card ${className}`];
        choiceElement.innerHTML = `${className}`;
        if(isItUserElement) {
            userPickedElement.append(choiceElement);
        } else { 
            sheldonPickedElement.append(choiceElement)

        }

    }

}

game()