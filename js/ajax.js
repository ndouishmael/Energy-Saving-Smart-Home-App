// Function to make an AJAX GET request
function get(url, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.status);
      }
    }
  };
  xhr.send();
}

// Function to make an AJAX POST request
function post(url, data, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}
// usage of the AJAX functions

// GET request 
get('https://api.example.com/data', function(response) {
  console.log('GET Request Successful');
  console.log(response);
}, function(error) {
  console.log('GET Request Failed');
  console.log(error);
});

// POST request
var postData = { name: 'John Doe', email: 'john@example.com' };
post('https://api.example.com/users', postData, function(response) {
  console.log('POST Request Successful');
  console.log(response);
}, function(error) {
  console.log('POST Request Failed');
  console.log(error);
});
