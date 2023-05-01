import os
import uuid

from flask import Blueprint, request, jsonify, send_from_directory, abort, current_app

bp = Blueprint('routes', __name__, url_prefix='/')

UPLOAD_FOLDER = 'uploads/';

# helper function to return error responses
def error_response(message, status_code):
    return jsonify({'error': message}), status_code

# route to upload an image
@bp.route('/images/upload', methods=['POST'])
def upload():
    try:
        if 'image' not in request.files:
            return error_response(request.files, 400)

        file = request.files['image']
        current_app.logger.info(f"File {request} saved successfully")
        if file.filename == '':
            return error_response('No image uploaded', 400)

        if file:
            filename = UPLOAD_FOLDER + str(uuid.uuid4())
            file.save(filename)
            return jsonify({'success': 'Image uploaded successfully', 'id': filename}), 200
    except Exception as e:
        current_app.logger.error(e)
        return error_response('An error occurred while uploading the image', 500)

# route to list all uploaded images
@bp.route('/images', methods=['GET'])
def list_images():
    try:
        images = os.listdir(UPLOAD_FOLDER)
        return jsonify(images)
    except Exception as e:
        current_app.logger.error(e)
        return error_response('An error occurred while retrieving the list of images', 500)

# route to retrieve an uploaded image
@bp.route('/images/<id>', methods=['GET'])
def get_image(id):
    try:
        return send_from_directory(UPLOAD_FOLDER, id)
    except FileNotFoundError:
        return error_response('The requested image was not found', 404)
    except Exception as e:
        current_app.logger.error(e)
        return error_response('An error occurred while retrieving the image', 500)

# handle 404 errors
@bp.errorhandler(404)
def not_found(error):
    return error_response('Not found', 404)

# handle all other errors
@bp.errorhandler(Exception)
def handle_error(error):
    current_app.logger.error(error)
    return error_response('Internal server error', 500)

def init_app(app):
    app.register_blueprint(bp)
