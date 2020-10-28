from flask import Flask, request
import psycopg2
app = Flask(__name__)

@app.route("/")
def index():
    return 'Hello World!'