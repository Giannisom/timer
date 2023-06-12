alert("Unfortunately there is a bug \u{1F41E}\nthat I haven't fixed yet \u{1F614}");
alert("When the timer starts and you change the time, the seconds go by faster. You have to refresh the page!");
var countdownTime;
var countdown;

// Function to start the countdown
function startCountdown() {
  // Get the user-entered values for hours and minutes
  var hours = parseInt(document.getElementById("hoursInput").value);
  var minutes = parseInt(document.getElementById("minutesInput").value);
  
  // Validate the user input
  if (isNaN(hours) || isNaN(minutes)) {
    alert("Please enter valid values for hours and minutes.");
    return;
  }

  // Calculate the total time in milliseconds
  countdownTime = (hours * 60 * 60 + minutes * 60) * 1000;

  // Update the countdown every second
  countdown = setInterval(function() {
    // Decrease the remaining time by one second
    countdownTime -= 1000;

    // Calculate hours, minutes, and seconds
    var hoursLeft = Math.floor(countdownTime / (1000 * 60 * 60));
    var minutesLeft = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((countdownTime % (1000 * 60)) / 1000);

    // Display the countdown in the "timer" element
    document.getElementById("timer").innerHTML = hoursLeft + "h " + minutesLeft + "m " + secondsLeft + "s ";

    // If the countdown is finished, display a message
    if (countdownTime <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Countdown has ended!";
    }
  }, 1000);
}

// Function to stop the countdown
function stopCountdown() {
  clearInterval(countdown);
  document.getElementById("timer").innerHTML = "";
}

// Start the countdown when the "start" button is clicked
document.getElementById("startButton").addEventListener("click", startCountdown);

// Stop the countdown when the "stop" button is clicked
document.getElementById("stopButton").addEventListener("click", stopCountdown);



/***********AUDIO**************/

if (countdownTime <= 0) {
  clearInterval(countdown);
  document.getElementById("timer").innerHTML = "Countdown has ended!";
  document.getElementById("notificationSound").play();
}




