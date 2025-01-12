from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://admin:root@localhost:27017")

# create a database called Portofolio
db = client["Portofolio"]

# Acess the collection named Education
education = db["Education"]

# Insert Data

education.insert_many([{
    "img_path":"Img/Education/alazhar.png",
    "school": "Al Azhar 15 Islamic High School",
    "start_date": "2016",
    "end_date": "2019",
    "field": "Natural Science",
    "grade": "90/100",
    "thesis":"-"

},{
    "img_path":"Img/Education/unissula.png",
    "school": "Universitas Islam Sultan Agung",
    "start_date": "2019",
    "end_date": "2019",
    "field": "Bachlor of Industrial Engineering",
    "grade": "Drop Out",
    "thesis":"-"

}, {
    "img_path":"Img/Education/udinus.png",
    "school": "Universitas Dian Nuswantoro",
    "start_date": "2020",
    "end_date": "2024",
    "field": "Bachlor of Computer Science",
    "grade": "3.77/4.00",
    "thesis": "Implementation of Quantum Machine Learning in Predicting Corrosion Inhibition Efficiency of Expired Drugs"
}])