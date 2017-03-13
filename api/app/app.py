from flask import Flask, jsonify
app = Flask(__name__)


@app.route("/")
def hello():
    d = dict()
    d['hello'] = 'world'
    return jsonify(d)


@app.route("/api")
def hello_api():
    d = dict()
    d['hello'] = 'api'
    return jsonify(d)


@app.route("/api/1")
def api_1():
    d = dict()
    d['hello'] = '1'
    return jsonify(d)


@app.route("/api/2")
def api_2():
    d = dict()
    d['hello'] = '2'
    return jsonify(d)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)