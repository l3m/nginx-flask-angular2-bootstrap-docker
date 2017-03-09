from flask import Flask, jsonify
app = Flask(__name__)


@app.route("/api")
def hello():
    d = dict()
    d['hello'] = 'from flask'
    return jsonify(d)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)