from flask_bcrypt import Bcrypt
from flask import request, redirect, render_template, url_for
from flask_login import loginManager 

bcrypt  = Bcrypt(app)

class LoginForm(flaskForm):
    username = StringField("username", validators=[InputRequired('username required'), 
                                                   Length(min=5, max=25
                                                          message = 'username must be between 5 and 25 characters')])
    password = PasswordField("password", validators=[InputRequired('password required')])
    submit = SubmitField("submit")
    
    def validate(self):
        check_validate = super(LoginForm, self).validate()
        if not check_validate:
            return False
        user = User.query.filter_by(username = self.username.data).first()
        if not user:
            self.username.errors.append("invalid username or password")
            return False
        if not self.user.check_password(self.password.data):
            self.username.errors.append("invalid username or password")
            return False
        return True
                                            

@app.route("/login", methods = ["POST"])
def login_put():
   username = request.form.get('username') 
   password  = request.form.get('password') 
   remember = True if  request.form.get('remember')else False

   user = User.query.filter_by(username = self.username.data).first()





@app.route("/register", )
def register():
    return render_template("sigup.html")

@app.route("/register", methods= ["POST"])
def register():
    firstname = request.form.get("firstname")
    lastname = request.form.get("lastname")
    email  = request.form.get("email")
    password  = request.form.get("password")

    user = User.query.filter_by(firstname = firstname, lastname = lastname).first()
    if user():
        flash("username already exist")
        return redirect(url_for"signup.html")
    newUser = User(firstname = firstname, lastname = lastname, email = email)
    newUser.set_password(password)
    db.session.add(newUser)
    db.session.commit()
    return redirect url_for("login")