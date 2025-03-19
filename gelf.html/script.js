let totalPoints = 0;

function completeLesson(points) {
    totalPoints += points;

    // Update the total points displayed
    document.getElementById("total-points").innerText = totalPoints;

    // Show a message when the lesson is completed
    const messageSection = document.getElementById("message");
    messageSection.innerHTML = `<p>You completed a lesson and earned ${points} points!</p>`;
}

// Refresh button functionality
function refreshPage() {
    totalPoints = 0;  // Reset the total points
    document.getElementById("total-points").innerText = totalPoints;  // Update points display

    // Reset the message section
    const messageSection = document.getElementById("message");
    messageSection.innerHTML = "<p>Congratulations! You Have Completed</p>";
}

// submit button functionality
function submit() {
    totalPoints = 0;  // Reset the total points
    document.getElementById("total-points").innerText = totalPoints;  // Update points display

     // Reset the message section
     const messageSection = document.getElementById("message");
     messageSection.innerHTML = "<p>Click a lesson to start learning!</p>";
}