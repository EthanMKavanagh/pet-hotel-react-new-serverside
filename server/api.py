from flask import Flask, request, jsonify
import psycopg2
app = Flask(__name__)

@app.route("/")
def index():
    return 'Hello World!'

con = psycopg2.connect(
    host = 'localhost',
    port = 5432,
    database = 'Pet_Hotel'
)

@app.route("/owners")
def owners_table():
    cur = con.cursor()
    cur.execute('SELECT * FROM "owner"')
    rows = cur.fetchall()
    return jsonify(rows), 201