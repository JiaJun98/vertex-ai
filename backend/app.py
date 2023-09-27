from flask import Flask, request, jsonify
import hashlib
import time

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    """
    Test function
    """
    return {'time': time.time()}

#Add checksum backend first - Shld be post request
def calculate_checksum(file):
    # Calculate the MD5 checksum of a file
    hasher = hashlib.md5()
    content = file.read()
    hasher.update(content)
    return hasher.hexdigest()

@app.route('/checksum', methods=['POST'])
def compare_files():
    # Check if both files are present in the request
    if 'file1' not in request.files or 'file2' not in request.files:
        return jsonify({'error': 'Both files must be uploaded'}), 400

    # Get the files
    file1 = request.files['file1']
    file2 = request.files['file2']

    # Calculate checksums
    checksum1 = calculate_checksum(file1)
    checksum2 = calculate_checksum(file2)

    # Compare the checksums and respond
    are_files_identical = checksum1 == checksum2
    return jsonify({
        'checksum1': checksum1,
        'checksum2': checksum2,
        'are_files_identical': are_files_identical
    })


if __name__ == '__main__':
    app.run(debug = True)