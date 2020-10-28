CREATE TABLE "owner" (
 "id" SERIAL PRIMARY KEY,
 "name" VARCHAR (30) NOT NULL );
 
CREATE TABLE "pet" (
 "id" SERIAL PRIMARY KEY,
 "owner_id" INT REFERENCES "owner",
 "name" VARCHAR (30) NOT NULL,
 "breed" VARCHAR (30) NOT NULL,
 "color" VARCHAR (30) NOT NULL,
 "checked_in" BOOLEAN DEFAULT FALSE );