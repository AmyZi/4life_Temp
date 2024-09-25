from sqlalchemy import Column, ForeignKey, Integer, String, create_engine, null
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


app = Flask(__name__)
app.config["SECRET_KEY"] = "e251d7fc2b7d8924564bdea020f90b99"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(minutes=5)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = datetime.timedelta(hours=1)

CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*", "allow_methods": "*"}})

jwt = JWTManager(app)

engine = create_engine('sqlite:///database.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
db = Session()
