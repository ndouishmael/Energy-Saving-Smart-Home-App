from flask import render_template, redirect, url_for, flash
from app import app
from app.forms import LoginForm, RegistrationForm
from app.models import User

# Home route
@app.route('/')
def home():
    return render_template('home.html')

# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Get the user from the database based on the entered username
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.check_password(form.password.data):
            # Redirect to user dashboard if login is successful
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid username or password', 'error')
    return render_template('login.html', form=form)

# Registration route
@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Create a new user object and save it to the database
        user = User(username=form.username.data)
        user.set_password(form.password.data)
        user.save()
        flash('Registration successful! You can now log in.', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

# User dashboard route
@app.route('/dashboard')
def dashboard():
    # Fetch the user's portfolio items from the database
    portfolio_items = User.get_portfolio_items()
    return render_template('dashboard.html', portfolio_items=portfolio_items)
