// Possible outcomes
const win = 'You win!';
const lose = 'You lose!';
const tie = "It's a tie!";
const invalid = 'Stop trying to be funny and play the damn game... smh';
const playButton = document.getElementById('playBtn');
let computerChoice = '';

// Getting user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    return 'Invlid input.';
  }
};

// Getting computer input
const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
      break;
    default:
      console.log('getComputerChoice error');
      break;
  }
};

// Computing winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log(userChoice);
    console.log(computerChoice);
    return tie;
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return lose;
    } else if (computerChoice === 'scissors') {
      return win;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return lose;
    } else if (computerChoice === 'paper') {
      return win;
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return lose;
    } else if (computerChoice === 'rock') {
      return win;
    }
  } else {
    return invalid;
  }
};

// showResults(determineWinner(getUserChoice(userChoice), getComputerChoice())

const showResults = (userChoice, computerChoice, result) => {
  document.getElementById(
    'yourChoice'
  ).innerHTML = `Your choice is: ${userChoice}`;
  document.getElementById(
    'computerChoice'
  ).innerHTML = `Computer's choice is: ${computerChoice}`;
  document.getElementById(
    'winner'
  ).innerHTML = `...And the result is: ${result}`;
};

const play = () => {
  let userChoice = prompt('Rock, paper, or scissors?');
  let computerChoice = getComputerChoice();
  showResults(
    userChoice,
    computerChoice,
    determineWinner(getUserChoice(userChoice), computerChoice)
  );
};
playButton.addEventListener('click', play);

// Uncomment to test code
// console.log(determineWinner(getUserChoice(), getComputerChoice()));

// let playAgain = prompt('Again?').toLowerCase();
// if (playAgain === 'yes') {
//   console.log(determineWinner(getUserChoice(), getComputerChoice()));
// } else {
//   console.log('Thanks for playing!');
// }
