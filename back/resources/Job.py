from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Job import Job
from models.Postulation import Postulation
from database import db 


class JobsList(Resource):
      
    def post(self):
        name = request.json['name']
        description = request.json['description']
        experience = request.json['experience']

        job = Job(name=name, description=description, experience=experience)
        
        db.session.add(job)
        db.session.commit()
        return jsonify({'mensaje': 'Trabajo agregado con éxito.'})
    
    
    def get(self):
        jobs = db.session.query(Job).all()
        print('job',jobs)
        result = []
        for job in jobs:
            result.append({
                'id': job.id, 
                'name': job.name, 
                'description': job.description, 
                'experience': job.experience 
        })
        response = jsonify(result)
        response.status_code = 200 
        return response