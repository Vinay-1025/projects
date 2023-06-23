// Function to be executed every month

function updateValue() {
    // Perform your desired value update here
    leaves=0;
  }
  
  // Function to check if the month has changed
  function checkMonthChange() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
  
    // Check if the month has changed
    if (currentMonth !== checkMonthChange.previousMonth) {
      checkMonthChange.previousMonth = currentMonth; // Update the previous month
      updateValue(); // Call your update function
    }
  }
  
  // Set an initial value for the previous month
  checkMonthChange.previousMonth = new Date().getMonth();
  
  // Check for month change every second (adjust the interval as needed)
  setInterval(checkMonthChange, 1000);
  