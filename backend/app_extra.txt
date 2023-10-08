"""
#ZeroMQ refractor
@app.route('/checksum/zmq', methods=['POST'])
def compare_files_zmq():
    # Use ZeroMQ to get files from frontend
    message = socket.recv()
    # You'll need to implement a method to deserialize the message back to files

    # Check if both files are present in the deserialized message
    if not message or 'file1' not in message or 'file2' not in message:
        socket.send_string('Both files must be uploaded')
        return jsonify({'error': 'Both files must be uploaded'}), 400

    # Get the files
    file1 = message['file1']
    file2 = message['file2']

    # Calculate checksums
    checksum1 = calculate_checksum(file1)
    checksum2 = calculate_checksum(file2)

    # Compare the checksums and respond
    are_files_identical = checksum1 == checksum2
    response = {
        'checksum1': checksum1,
        'checksum2': checksum2,
        'are_files_identical': are_files_identical
    }
    socket.send_string(response)
    return jsonify(response)
"""
