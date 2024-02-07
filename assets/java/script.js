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
    const playAgainBtn = document.querySelector('.play-again')



    window.addEventListener('load', () => {

        document.querySelectorAll('.user-choice .game-card').forEach(card => {
            card.addEventListener('click', (event) => {
                userChoice = getUserChoice(event.target);
                sheldonChoice = getSheldonChoice()

                startGame();
            })
        })
        playAgainBtn.addEventListener('click', tryAgain) ;
    })

    function startGame() {
        calculateWinner(userChoice, sheldonChoice)
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden')
        clearResultsBeforeAppend();
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, sheldonChoice);
    }


    // return the second item in the class-list array which in this case indicates which option was selected, will need updating with images
    function getUserChoice(target) {
        console.log(target);
        if (target.nodeName === "BUTTON") {
            //console.log( target.parentElement.classList[1]);//
        }
        return (target.classList[1]);
    }

// a randomised function that "sheldon" uses to select an option from the five available

    function getSheldonChoice() {
        return choices[Math.floor(Math.random() * 5)];
    }

//calculates whether the user has won or not by comparing the concatenated string values of the user choice and sheldon choice against an array of possible win combinations

    function calculateWinner(usercard, sheldoncard) {
        if (usercard === sheldoncard) {
            resultTitleElement.innerText = "I don't need sleep, I need answers";
        } else if (getUserWinsStatus(usercard + sheldoncard)) {
            resultTitleElement.innerText = "Alright, I'll bow to social pressure";
        } else {
            resultTitleElement.innerText = 'bazinga';
        }

    }

    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr === result);
    }

//function that builds user and sheldon choice elements using classname, function will need editing when images are added
//update the choices on the results block (hidden until an option is picked)
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

    function tryAgain () {
        userChoiceElement.classList.remove('hidden');
        pickedElement.classList.add('hidden');

    }

    function clearResultsBeforeAppend() {
        userPickedElement.innerHTML = '';
        sheldonPickedElement.innerHTML = '';
    }

}

game()