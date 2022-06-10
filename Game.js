console.log('Let\'s play!');
game();

function cpuPlay(){
	let ranNumber = Math.random() * 300;
	let cpuSelection = '';

	if (ranNumber < 100){
		cpuSelection = 'rock';
	}
	else if (ranNumber >= 100 && ranNumber < 200){
		cpuSelection = 'paper';
	}
	else{
		cpuSelection = 'scissors';
	}
	return (cpuSelection);
}

function playRound(playerSelection, computerSelection) {
	let result = '';
	if (playerSelection == 'rock' && computerSelection == 'paper'){
		result = 'cpu';
	}
	else if (playerSelection == 'paper' && computerSelection == 'scissors'){
		result = 'cpu';
	}
	else if (playerSelection == 'scissors' && computerSelection == 'rock'){
		result = 'cpu';
	}
	else if (playerSelection == computerSelection){
		result = 'tie';
	}
	else{
		result = 'player';
	}

	return (result);
}

function game() {
	let cpuScore = 0;
	let playerScore = 0;
	let winner = '';
	for (let i = 0; i < 5; i++){
		let computerSelection = cpuPlay();
	
		let playerSelection = prompt("Rock, Paper or Scissors?");
	
		if(playerSelection == null || playerSelection == ''){
		
			i--;
			playerSelection = prompt("Rock, Paper or Scissors?");
		}
		else if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
			console.log("Wrong input!");
			i--;
			playerSelection = prompt("Rock, Paper or Scissors?");
		}
		else{
			playerSelection = playerSelection.toLowerCase();
			winner = playRound(playerSelection, computerSelection);
			if (winner == 'player'){
				console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
				playerScore++;
			}
			else if(winner == 'cpu'){
				console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
				cpuScore++;
			}
			else{
				console.log("It's a tie!");
			}
		}
	}
	console.log(`score(player - cpu): ${playerScore} - ${cpuScore}`);
	if (playerScore > cpuScore){
		console.log("You won!");
	}
	else if (cpuScore > playerScore){
		console.log("You lose!");
	}
	else{
		console.log("It's a tie!");
	}
}