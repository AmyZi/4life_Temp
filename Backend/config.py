app = Flask(__name__)
app.config["SECRET_KEY"] = "e251d7fc2b7d8924564bdea020f90b99"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(minutes=5)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = datetime.timedelta(hours=1)

CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*", "allow_methods": "*"}})

jwt = JWTManager(app)
