from app import db

class Job(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    description = db.Column(db.String(250))
    experience = db.Column(db.String(250))

    jobPostulations = db.relationship("Postulation", backref='job')
    
    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'description: {self.description}, '
            f'experience: {self.experience}, '
        )
        
