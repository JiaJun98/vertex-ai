from flask import Flask

app = Flask(__name__)


@app.route("/checksum")
def checksum():
    return {"checksum": ["checksum1", "checksum2", "checksum3"] }

if __name__ == '__main__':
    app.run(debug = True, use_reloader = True)