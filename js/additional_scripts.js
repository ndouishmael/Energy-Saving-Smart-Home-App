// Function to handle a button click event
function handleButtonClick() {
  // Perform some action when the button is clicked
  console.log('Button clicked!');
}

// Function to show a success message
function showSuccessMessage(message) {
  // Display a success message to the user
  console.log('Success:', message);
}

// Function to fetch data from an API
function fetchData(url) {
  // Perform an API request to fetch data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Fetched Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Usage

// Add a click event listener to a button
var button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick);

// Show a success message
showSuccessMessage('Operation completed successfully.');

// Fetch data from an API
var apiUrl = 'https://api.example.com/data';
fetchData(apiUrl);
