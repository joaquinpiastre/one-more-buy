from app import db

class Postulation(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    jobId = db.Column(db.Integer, db.ForeignKey('job.id'))

    
    def __str__(self):
        return (
            f'id: {self.id}, '
        )