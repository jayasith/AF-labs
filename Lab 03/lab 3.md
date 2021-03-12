# **Lab 03**
*IT19079264*
### create database
```json 
use sliit
```
### create collection
```json 
db.createCollection('Lab 4')
```
### 3. Add the following document to the database sliit
```json
db.getCollection('Lab 4').insertOne({
"name": "John",
"dateOf Birth":"1990-01-01T00:00:00Z",
"subjects":["Application frameworks","Computer architecture"]})
```
### 4. Find the document by ‘name’.
```json 
db.getCollection('Lab 4').find(name:"Jhon")
```
### 5. Find the document by ‘_id’.
```json 
db.getCollection('Lab 4').find({ "_id" : ObjectId("6043963f3ded61cf56b8cfec")})
```
### 6. Add ‘Distributed Computing’ to the subjects list.
```json 
db.getCollection('Lab 4').update({"name": "John"},{$push:{"subjects":"Distributed Computing"}})
```
### 7. Add the following 2 document to the same collection.
```json 
db.getCollection('Lab 4').insertMany([{
"name": "Smith",
"dateOfBirth": "1990-01-15T00:00:00Z",
"subjects": ["Application frameworks", "Computer architecture"],
"isActive": true},
{"name": "Jane",
"dateOfBirth": "1990-02-15T00:00:00Z",
"subjects": ["Application frameworks", "Computer architecture"],
"isActive": false
}])
```
### 7. Find the document with the name ‘Smith’ and isActive flag is true and add Distributed computing to subjects.
```json 
db.getCollection('Lab 4').updateOne({
"name": "Smith","isActive": true},
{$push:{"subjects":"Distributed Computing"}
})
```
### 8. Update the first document ‘isActive’ to false.
```json 
db.getCollection('Lab 4').update({ "name": "Smith"},{"isActive": false})
```
### 9. Remove the first document created.
```json 
db.getCollection('Lab 4').deleteOne({ "name": "John"})
```