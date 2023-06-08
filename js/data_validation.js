// Function to validate email format
function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  return regex.test(email);
}

// Function to validate password strength
function validatePassword(password) {
  // Password should have at least 8 characters
  // and contain at least one uppercase letter, one lowercase letter, and one digit
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

// Function to validate a date in YYYY-MM-DD format
function validateDate(date) {
  var regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return false;
  }
  var parts = date.split('-');
  var year = parseInt(parts[0]);
  var month = parseInt(parts[1]);
  var day = parseInt(parts[2]);
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }
  if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
    return false;
  }
  if (month === 2) {
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (day > 29 || (day === 29 && !isLeapYear)) {
      return false;
    }
  }
  return true;
}

// Usage

var email = 'test@example.com';
console.log('Email Valid:', validateEmail(email));

var password = 'Password123';
console.log('Password Strong:', validatePassword(password));

var date = '2022-12-31';
console.log('Date Valid:', validateDate(date));
