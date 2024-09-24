from dotenv import load_dotenv
import os


load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))


class ApplicationConfig(object):
    SECRET_KEY = ' '
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
