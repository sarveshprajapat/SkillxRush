function playerChoice(choice) {
    // Generate computer's choice
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Display choices
    document.getElementById('player-choice').textContent = `Your Choice: ${choice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;
    
    // Determine winner
    let result = "";
    if (choice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (choice === "rock" && computerChoice === "scissors") ||
        (choice === "scissors" && computerChoice === "paper") ||
        (choice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    
    // Display result
    document.getElementById('result').textContent = result;
}
