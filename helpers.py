from werkzeug.security import generate_password_hash, check_password_hash

# Helper function to hash the password
def hash_password(password):
    return generate_password_hash(password)

# Helper function to check if the provided password matches the hashed password
def check_password(hashed_password, password):
    return check_password_hash(hashed_password, password)
    
# Helper function to validate a username
def is_valid_username(username):
    # Add custom validation logic for the username if needed
    return len(username) >= 3

# Helper function to validate a password
def is_valid_password(password):
    # Add custom validation logic for the password if needed
    return len(password) >= 6
