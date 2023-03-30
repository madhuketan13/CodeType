// Get the input element
const userInputEl = document.getElementById("input");

// Add event listener to the input element
userInputEl.addEventListener("keydown", function(event) {
  // Check if the key pressed was the enter key
  if (event.key === "Enter") {
    // Get the value of the input element
    const userInput = userInputEl.value;
    
    // Check if the user input is "javascript"
    if (userInput.toLowerCase() === "javascript") {
      // Navigate to index.html page
      window.location.href = "main.html?userInput=" + encodeURIComponent(userInput.toLowerCase());
    }

    else if (userInput.toLowerCase() === "python") {
      // Navigate to index.html page
      window.location.href = "main.html?userInput=" + encodeURIComponent(userInput.toLowerCase());
    }

    if (userInput.toLowerCase() === "c#") {
      // Navigate to index.html page
      window.location.href = "main.html?userInput=" + encodeURIComponent(userInput.toLowerCase());
    }

    if (userInput.toLowerCase() === "java") {
      // Navigate to index.html page
      window.location.href = "main.html?userInput=" + encodeURIComponent(userInput.toLowerCase());
    }

  }
});
