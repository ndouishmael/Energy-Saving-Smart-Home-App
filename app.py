from flask import Flask, render_template, request, redirect, url_for, session
from forms import LoginForm, RegistrationForm

app = Flask(__name__)
app.secret_key = 'money_talks'

# Routes
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Perform login authentication
        # ...
        # Set session data
        session['username'] = form.username.data
        return redirect(url_for('dashboard'))
    return render_template('login.html', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Perform user registration
        # ...
        # Set session data
        session['username'] = form.username.data
        return redirect(url_for('dashboard'))
    return render_template('register.html', form=form)

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return "Welcome, " + session['username'] + "!"
    else:
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
