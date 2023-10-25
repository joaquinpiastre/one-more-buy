from flask import  jsonify, request, Blueprint
from database import db
from models.User import User


auth = Blueprint("auth" ,__name__, url_prefix= "/auth")

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')


    if email == 'test@example.com' and password == 'password':
        response = {'Mensaje': 'Inicio sesion correctamente'}
        return jsonify(response), 200
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
 
