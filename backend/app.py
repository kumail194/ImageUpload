from flask import Flask, send_from_directory
from routes.routes import init_app
import logging
import sys
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)
init_app(app)

# Add logging configuration
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.INFO)
UPLOAD_FOLDER = 'uploads'



# configure the app to use the UPLOAD_FOLDER directory for static files
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.static_folder = UPLOAD_FOLDER
app.static_url_path = '/uploads'

# serve static files from the UPLOAD_FOLDER directory
@app.route('/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Define additional routes here
@app.route("/")
def hello():
    return "Hello, World!!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)