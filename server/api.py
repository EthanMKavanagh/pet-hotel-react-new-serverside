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

@app.route("/pets", methods=["POST"])
def pet_table():
    content = request.json
    cur = con.cursor()
    sql = 'INSERT INTO "pet" ("owner_id", "name", "breed", "color") VALUES (%s, %s, %s, %s);'
    cur.execute(sql, (content["owner_id"], content["name"], content["breed"], content["color"],))
    con.commit()
    return "Added pet"

@app.route("/owners", methods=['POST', 'GET'])
def owner():
    if request.method == 'POST':
        print('REQUEST', request.json['name'])
        cur = con.cursor()
        val = request.json
        qry = 'INSERT INTO "owner" ("name") VALUES (%s)'
        cur.execute (qry, (val['name'],))
        con.commit()
        return "Added Owner!"
    elif request.method == 'GET':
        cur = con.cursor()
        # cur.execute('SELECT * FROM "owner"')
        cur.execute('SELECT "owner"."name", "owner"."id", COUNT("pet"."owner_id") AS "number_of_pets" FROM "owner" LEFT JOIN "pet" ON "pet"."owner_id" = "owner"."id" GROUP BY "owner"."name", "owner"."id";')
        rows = cur.fetchall()
        return jsonify(rows), 201

@app.route("/owners/<id>", methods=['DELETE'])
def delete(id):
    print('delete request', id)
    return 'deleted!'