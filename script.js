// Function to update greeting and datetime
function updateDateTime() {
    // Get current date and time
    var now = new Date();

    // Get hour
    var hour = now.getHours();

    // Define greeting based on hour
    var greeting = '';
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    // Get formatted date and time
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = now.toLocaleDateString('en-US', dateOptions);
    var formattedTime = now.toLocaleTimeString('en-US');

    // Update greeting and datetime in HTML
    document.getElementById('greeting').innerText = greeting;
    document.getElementById('datetime').innerText = formattedDate + ' ' + formattedTime;

    // Update every second
    setTimeout(updateDateTime, 1000);
}

// Call the function to initialize
updateDateTime();
