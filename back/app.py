from flask import Flask, jsonify, request
from flask_cors import CORS
from database import *
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from models.User import User
from resurces.auth.routes import auth

app = Flask(__name__)
CORS(app)

app.config ["SQLALCHEMY_DATABASE_URI"] = FULL_URL_DB
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db.init_app(app)

migrate = Migrate()
migrate.init_app(app,db)

@app.route('/')
def home():
    print('home')
    return jsonify({'mensaje': 'Home'})

if __name__ == '__main__':
    app.run(debug=True)