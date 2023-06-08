from flask import Flask, render_template, request, redirect, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'money_talks'

# user data stored in memory
users = [
    {'username': 'user1', 'password': generate_password_hash('password1')},
    {'username': 'user2', 'password': generate_password_hash('password2')}
]

@app.route('/')
def home():
    if 'username' in session:
        return f"Welcome, {session['username']}!"
    return 'Home page'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        user = next((user for user in users if user['username'] == username), None)
        if user and check_password_hash(user['password'], password):
            session['username'] = username
            return redirect('/')
        else:
            return 'Invalid username or password'
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if next((user for user in users if user['username'] == username), None):
            return 'Username already exists'
        
        hashed_password = generate_password_hash(password)
        users.append({'username': username, 'password': hashed_password})
        
        return 'Registration successful! Please <a href="/login">login</a>'
    
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/')

if __name__ == '__main__':
    app.run()
