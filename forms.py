from wtforms import Form, StringField, PasswordField, validators

# Login Form
class LoginForm(Form):
    username = StringField('Username', validators=[validators.InputRequired()])
    password = PasswordField('Password', validators=[validators.InputRequired()])

# Registration Form
class RegistrationForm(Form):
    username = StringField('Username', validators=[validators.InputRequired(), validators.Length(min=3)])
    password = PasswordField('Password', validators=[validators.InputRequired(), validators.Length(min=6)])
    confirm_password = PasswordField('Confirm Password', validators=[validators.EqualTo('password', message='Passwords must match')])
