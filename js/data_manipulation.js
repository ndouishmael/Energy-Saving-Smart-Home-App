// Sample data
var users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Bob Johnson', age: 40 },
];

// Function to filter users by age
function filterUsersByAge(users, age) {
  return users.filter(function(user) {
    return user.age >= age;
  });
}

// Function to sort users by name
function sortUsersByName(users) {
  return users.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

// Function to find a user by ID
function findUserById(users, id) {
  return users.find(function(user) {
    return user.id === id;
  });
}

// Function to update user information
function updateUser(users, id, newData) {
  var user = findUserById(users, id);
  if (user) {
    Object.assign(user, newData);
    return true;
  }
  return false;
}

// Usage 

// Filter users by age
var filteredUsers = filterUsersByAge(users, 30);
console.log('Filtered Users:', filteredUsers);

// Sort users by name
var sortedUsers = sortUsersByName(users);
console.log('Sorted Users:', sortedUsers);

// Find user by ID
var foundUser = findUserById(users, 2);
console.log('Found User:', foundUser);

// Update user information
var updated = updateUser(users, 3, { name: 'Robert Johnson', age: 45 });
console.log('User Updated:', updated);
console.log('Updated Users:', users);
