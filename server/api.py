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

@app.route("/pets", methods=["POST", "GET"])
def pet_table():
    if request.method == 'POST':
        content = request.json
        cur = con.cursor()
        sql = 'INSERT INTO "pet" ("owner_id", "name", "breed", "color") VALUES (%s, %s, %s, %s);'
        cur.execute(sql, (content["owner_id"], content["name"], content["breed"], content["color"],))
        con.commit()
        return "Added pet"
    elif request.method == 'GET':
        cur = con.cursor()
        cur.execute('SELECT * FROM "pet"')
        rows = cur.fetchall()
        return jsonify(rows), 201

@app.route("/pets/<id>",  methods=["DELETE", "PUT"])
def petsManagement(id):
    if request.method == 'DELETE':
        cur = con.cursor()
        content = request.json
        sql = ('DELETE FROM "pet" WHERE "id" = %s')
        print (id)
        cur.execute(sql, (id,))
        con.commit()
        return "Deleted Pet"
    elif request.method == "PUT":
        cur = con.cursor()
        content = request.json
        # if content["checked_in"] == True:
        #     updatedStatus = False
        # else:
        #     updatedStatus = True
        sql = ('UPDATE "pet" SET "checked_in" = %s WHERE "id" = %s')
        cur.execute(sql, (content["checked_in"], id,))
        con.commit()
        return "Edited Pet"

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