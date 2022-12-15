from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import json 

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def get_data():

    data = request.get_json()
    with open('data.json', 'w') as f:
        json.dump(data, f)
    return "submitted"

@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.get_json()
    with open('data.json') as data_file:
        data_loaded = json.load(data_file)
    print(data_loaded)
    response = make_response(
        jsonify(data_loaded)
    )
    response.headers["Content-Type"] = "application/json"
    return response


if __name__ == "__main__":

    app.run(debug=True, port=3000)