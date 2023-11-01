from flask import  jsonify, request, Blueprint
from database import db
from models.User import User


auth = Blueprint('auth', __name__, url_prefix= '/auth')


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
   
    #Solicito que la base de datos liste el primer email que coincida con el ingresado 
    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    if emailDb and emailDb.password == password:
        return jsonify(role=role),200
    else:
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401


    
    
@auth.route('/register', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    role = '2'
    print(name, email, password, role)
    
    user = User(name=name, email=email, password=password, role=role)
    db.session.add(user)
    db.session.commit()
    return jsonify(role=role),200
 
