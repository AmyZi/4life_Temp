import uuid
from flask import Flask, request
from model import db, User, Mentor, Mentee, Mentorship
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity
import datetime
from flask_cors import CORS


app = Flask(__name__)
app.config["SECRET_KEY"] = "e251d7fc2b7d8924564bdea020f90b99"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(minutes=5)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = datetime.timedelta(hours=1)

CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*", "allow_methods": "*"}})

jwt = JWTManager(app)

@app.route('/')
def index():
    users = db.query(User).all()
    users = [user.toJson() for user in users]
    return {"users": users}

@app.route('/signup', methods=["POST"])
def register_user():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    firstname = request.json.get("firstname", None)
    lastname = request.json.get("lastname", None)
    role = request.json.get("role", "mentee")

    if not email or not password or not firstname or not lastname:
        return {"error": "Missing required fields"}, 400

    new_user = User(email=email, firstname=firstname, lastname=lastname, role=role)
    new_user.set_password(password)

    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}, 200

@app.route('/login', methods=["POST"])
def login_user():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email or not password:
        return {"error": "Missing required fields"}, 400
    
    user = db.query(User).filter_by(email=email).first()

    if not user:
        return {"error": "User not found"}, 404
    
    if not user.compare_password(password):
        return {"error": "Invalid credentials"}, 401

    return {
        "access_token": create_access_token(identity=user.id),
        "refresh_token": create_refresh_token(identity=user.id),
        "user": user.toJson()
    }, 200

@app.route('/refresh', methods=["POST"])
def refresh_token():
    current_user = get_jwt_identity()
    return {
        "access_token": create_access_token(identity=current_user)
    }, 200

if __name__ == "__main__":
    app.run(debug=True)