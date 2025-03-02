# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from chatbot import Chatbot
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)
chatbot = Chatbot()


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }

@app.route('/chatresponse', methods=["POST", "GET"])
def get_response():
    response = request.json['question']
    # print("Received question:", response, flush=True)  # This prints to the terminal
    
    answer = chatbot.run_question(response)
    # print("Received answer:", answer, flush=True)  # This prints to the terminal
    

    return jsonify({"answer": answer})
    
# Running app
if __name__ == '__main__':
    app.run(debug=True)
