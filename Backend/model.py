import bcrypt
from sqlalchemy import Column, ForeignKey, Integer, String, create_engine, null
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import uuid

Base = declarative_base()

class User(Base):
    __tablename__ = "Users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    firstname = Column(String(30))
    lastname = Column(String(30))
    email = Column(String(50), unique=True)
    password = Column(String(60))
    role = Column(String(10), default='mentee')

    def set_password(self, password):
        bcrypt_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        self.password = bcrypt_password.decode('utf-8')

    def compare_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))
    
    def toJson(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "role": self.role
        }

    def __repr__(self):
        return f"User('{self.firstname}', '{self.email}')"

class Mentor(Base):
    __tablename__ = 'mentor'
    id = Column(Integer, primary_key=True)
    userId = Column(Integer, ForeignKey('Users.id'))

class Mentee(Base):
    __tablename__ = 'mentee'
    id = Column(Integer, primary_key=True)
    userId = Column(Integer, ForeignKey('Users.id'))

    def __repr__(self):
        return f"Mentor('{self.username}', '{self.task}')"

class Mentorship(Base):
    __tablename__ = 'mentorship'
    id = Column(Integer, primary_key=True)
    mentor_id = Column(String, ForeignKey('mentor.id'))
    mentee_id = Column(String, ForeignKey('mentee.id'))

engine = create_engine('sqlite:///database.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
db = Session()