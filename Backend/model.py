from  flask_sqlalchemy import SQLAlchemy
from  datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    firstname = db.Column(db.String(30), nullable=False)
    lastname = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    # updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())



    # Foreign key reference to the Mentor table
    mentor_id = db.Column(db.Integer, db.ForeignKey('mentor.id'), nullable=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"

class Mentor(db.Model):
    __tablename__ = 'mentor'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    session = db.Column(db.DateTime, default=datetime.utcnow)
    spec = db.Column(db.Text, nullable=False)

    # Relationship between Mentor and User (Mentees)
    mentees = db.relationship('User', backref='mentor', lazy=True)

    def __repr__(self):
        return f"Mentor('{self.username}', '{self.task}')"
