import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    debug = True
    SECRET_KEY = ' '
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
