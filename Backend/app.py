from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_session import Session
from config import ApplicationConfig
from model import db, User, Mentor

app = Flask(__name__)
bcrypt = Bcrypt(app)
server_session = Session(app)
app.config.from_object(ApplicationConfig)
db.init_app(app)


with app.app_context():
    db.create_all()


@app.route("/register", methods = ["POST"])

def register():

    email = request.get_json()["email"]
    password = request.get_json()["password"]
    role = request.get_json()["role"]

    user_verify = User.query.filter_by(email = email).first() is not None

    if user_verify:
        return jsonify({"error": "user already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(firstname= firstname, lastname = lastname, email = email, role= role, password = hashed_password)

    if role == 'mentor':
        new_mentor = Mentor(
            firstname = request.get_json()["firstname"], 
            lastname = request.get_json()["lastname"]
        )
        db.session.add(new_mentor)
        db.session.commit()

        return jsonify({
            'message': 'Mentor registered successfully!'
        }), 201

    elif role == 'mentee':
        new_user = User(
            firstname = request.get_json()["firstname"], 
            lastname = request.get_json()["lastname"],
            email = request.get_json()['email'],
            password = 
            mentor_id = request.get_json()('mentor_id')
        )
        db.session.add(new_user)
        db,session.commit()
        return jsonify({
            'message': 'Mentee registered successfully'
        }), 201
return jsonify ({
    'message': 'Invalid role! Please select either mentor or mentee.'
}), 400


@app.route("/login", methods=[ "POST"])
def login_user():

    data = request.get_json()
    email = daa.get('email')
    password = data.get("password")

    mentor = Mentor.query.filter_by(email).first()
    if mentor and check_password_hash(mentor.password_hash, password):
        return jsonify({
            'status': 'success',
            'role' : 'mentor',
            'mentor_id': mentor.id
        }), 200

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password_hash, password):
        return jsonify({
            'status': 'success',
            'role': 'mentee',
            'user_id': user.id
        }), 200
        
return jsonify({
    'status': 'fail',
    'message': 'Invalid creditials!'
}), 401


#Mentor Dashboard
@app.route('/dashboard/mentor/<int: mentor_id>', methods=['GET'])
def mentor_dashboard(mentor_id):
    mentor = Mentor.query.get_or_404(mentor_id)

    mentee_list = Mentor.query.get(user.mentor_id) if user.mentor_id else None

    return jsonify({
        'mentee': {
            id: user.id,
            'firstname': user.firstname,
            'lastname': user.lastname,
            'email': user.email
        },
        'mentor': {
            'id': mentor.id,
            'firstname': mentor.firstname,
            'task'; mentor.task
        },
        'mentees': mentee_list
    })


if __name__ == "__main__":
    app.run(debug=True)
