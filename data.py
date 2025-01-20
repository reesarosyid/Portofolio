from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://admin:root@localhost:27017")

# create a database called Portofolio
db = client["Portofolio"]

# Acess the collection named Education
#education = db["Education"]
#experience = db["Experience"]

# Insert Data
"""db.Education.insert_many([{
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
}])"""

db.Experience.insert_many([
    {
        "img_path": "Img/Experience/matics.png",
        "title": "Research Assistant",
        "company": "Research Center of Quantum Computing and Materials Informatics",
        "period": {
            "start": "2023-Sep",
            "end": "Present"
        },
        "location": "Semarang",
        "type": "Part-time, On-site",
        "achievements": [
            "Acquired foundational knowledge of quantum computing principles and explored their practical applications in machine learning",
            "Assisted lecturers in research on machine learning and quantum machine learning applications in material science data analysis",
            "Successfully published articles in national journals indexed by SINTA 3 and international journals indexed in Q2"
        ]
    },
    {
        "img_path": "Img/Experience/coe.jpeg",
        "title": "Research Assistant",
        "company": "Udinus Center of Excellence",
        "period": {
            "start": "2024-Mar",
            "end": "2024-Jul"
        },
        "location": "Semarang",
        "type": "Internship, On-site",
        "achievements": [
            "Assisted lecturers in research focused on waste management systems",
            "Collected sample data on compost waste from DLH, Kendal Regency",
            "Preprocessed the compost waste data to ensure its readiness for machine learning model development",
            "Designed and developed a prototype web application dashboard for integrating the machine learning model and visualizing the data effectively"
        ]
    },
    {
        "img_path": "Img/Experience/idxpartners.jpeg",
        "title": "Data Scientist",
        "company": "id/x partners",
        "period": {
            "start": "2023-Aug",
            "end": "2023-Sep"
        },
        "location": "Jakarta",
        "type": "Internship Based on Project, Remote",
        "achievements": [
            "Successfully developed a machine learning model to detect credit card fraud using various machine learning algorithms"
        ]
    },
    {
        "img_path": "Img/Experience/bangkit.jpg",
        "title": "Machine Learning Cohort",
        "company": "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        "period": {
            "start": "2023-Feb",
            "end": "2023-Jul"
        },
        "location": "Bandung",
        "type": "Bootcamp, Remote",
        "achievements": [
            "Completed a 6-month intensive Machine Learning program, mastering foundational concepts and applying ML techniques such as regression, classification, clustering, and deep learning using Python, TensorFlow, scikit-learn, and Pandas",
            "Developed and applied a machine learning model for health-related applications, specifically for nail disease detection, focused on enhancing human healthcare and well-being through AI-driven solutions",
            "Our capstone was successfully honored as one of the top 68 product-based capstone projects out of 787 in this program"
        ]
    },
    {
        "img_path": "Img/Experience/hacktiv8.png",
        "title": "Data Scientist Cohort",
        "company": "Hacktiv8 Indonesia",
        "period": {
            "start": "2022-Aug",
            "end": "2022-Dec"
        },
        "location": "Jakarta",
        "type": "Bootcamp, Remote",
        "achievements": [
            "Acquired comprehensive knowledge of data science, including Python programming, descriptive and inferential statistics, data visualization, machine learning model development, and model deployment into web applications",
            "Successfully completed a capstone project by developing and deploying predictive and analytical models, including price estimation, weather prediction, disease risk classification, and sales segmentation, showcasing end-to-end data science workflows"
        ]
    }
])
db.Publications.insert_many([
  {
    "img_path": [
      "Img/Publication/Profile.png",
      "Img/Publication/Lubna.png",
      "Img/Publication/Akbar.png",
      "Img/Publication/Akrom.png",
      "Img/Publication/Supriadi.png",
      "Img/Publication/Hermawan.png"
    ],
    "title": "Implementation of quantum machine learning in predicting corrosion inhibition efficiency of expired drugs.",
    "date": "Jul 16, 2024", 
    "journal": "Materials Today Communications, Elsevier",
    "doi": "https://doi.org/10.1016/j.mtcomm.2024.109830",
    "abstract": "This study explores the potential of quantum machine learning (QML) 's potential in predicting expired pharmaceutical compounds' corrosion inhibition capacity. This investigation utilized a QSPR model where features derived from density functional theory (DFT) calculations are used as input, while the corrosion inhibition efficiency (CIE) values derived from the experimental study are used as target output. The proposed QML model exhibits varying performance through evaluation metrics, particularly concerning encoding and ansatz design. Notably, the quantum support vector machine (QSVM) demonstrates superior predictive performance compared to the variational quantum circuit (VQC) and quantum neural network (QNN). Specifically, the QSVM model achieves the highest scores in evaluation metrics, with a root mean squared error (RMSE) of 4.36, mean absolute error (MAE) of 3.19, and mean absolute deviation (MAD) of 3.08. The research highlights the importance of larger datasets to improve predictability and emphasizes the potential of QML in investigating anti-corrosion materials. Despite its limitations, this study establishes a foundational framework for utilizing QML to forecast anti-corrosive qualities."
  },
  {
    "img_path": [
      "Img/Publication/Profile.png",
      "Img/Publication/Lubna.png",
      "Img/Publication/Akrom.png"
    ],
    "title": "Investigasi Model Machine Learning Regresi Pada Senyawa Obat Sebagai Inhibitor Korosi.",
    "date": "Jul 29, 2024", 
    "journal": "Jurnal Alogritma, Institut Teknologi Garut",
    "doi": "https://doi.org/10.33364/algoritma/v.21-1.1598",
    "abstract": "Korosi merupakan tantangan signifikan bagi daya tahan material, yang seringkali menyebabkan kerugian ekonomi yang besar. Penelitian ini memanfaatkan teknik Machine Learning (ML)untuk memprediksi efektivitas senyawa obat sebagai inhibitor korosi. Kami menggunakan lima algoritma MLyang unggul: Regresi Linear, Support Vector Machines (SVM), K-Nearest Neighbors (KNN), Random Forest, dan XGBoost. Model-model ini dilatih dan dievaluasi menggunakan dataset yang terdiri dari 14 fitur molekuler dengan efisiensi inhibisi korosi (IE%) sebagai variabel target. Hasil pelatihan model awal mengidentifikasi Random Forest dan XGBoost sebagai model yang berkinerja terbaik berdasarkan metrik Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), dan R-squared (R²). Penyetelan hiperparameter lebih lanjut menggunakan GridSearchCV menunjukkan bahwa XGBoost, setelah penyetelan, secara signifikan mengungguli model lainnya, mencapai kesalahan terendah dan nilai R² tertinggi, menunjukkan akurasi prediktif yang superior untuk kasusini. Temuan ini menegaskan potensi ML, khususnya XGBoost, dalam meningkatkan pemodelan prediktif inhibitor korosi, sehingga memberikan wawasan berharga bagi bidang ilmu korosi."
  }
])
db.Certificate.insert_many([
  {
    "img_path": "Img/CertificateNSkill/ibm.svg",
    "company": "IBM",
    "title": "Data Engineering Specialization",
    "issued": "Dec 2024",
    "credentialId": "4UOBSZFVI5KO",
    "link": "https://www.coursera.org/account/accomplishments/specialization/4UOBSZFVI5KO"
  },
  {
    "img_path": "Img/CertificateNSkill/deeplearningai.png",
    "company": "DeepLearning.AI",
    "title": "Natural Language Processing Specialization",
    "issued": "Jul 2023",
    "credentialId": "WAV9HUUP4DM2",
    "link": "https://www.coursera.org/account/accomplishments/specialization/WAV9HUUP4DM2"
  },
  {
    "img_path": "Img/CertificateNSkill/deeplearningai.png",
    "company": "DeepLearning.AI",
    "title": "TensorFlow: Advanced Techniques Specialization",
    "issued": "Jun 2023",
    "credentialId": "44GPS8X5AHGH",
    "link": "https://www.coursera.org/account/accomplishments/specialization/44GPS8X5AHGH"
  },
  {
    "img_path": "Img/CertificateNSkill/deeplearningai.png",
    "company": "DeepLearning.AI",
    "title": "TensorFlow: Data and Deployment Specialization",
    "issued": "May 2023",
    "credentialId": "PZMXCYVUHF5A",
    "link": "https://www.coursera.org/account/accomplishments/specialization/PZMXCYVUHF5A"
  },{
    "img_path": "Img/CertificateNSkill/deeplearningai.png",
    "company": "DeepLearning.AI",
    "title": "TensorFlow Developer Specialization",
    "issued": "Apr 2023",
    "credentialId": "W68Z3TXPWYLW",
    "link": "https://www.coursera.org/account/accomplishments/specialization/W68Z3TXPWYLW"
  },{
    "img_path": "Img/CertificateNSkill/stanford.svg",
    "company": "Stanford University",
    "title": "Machine Learning Specialization",
    "issued": "Apr 2023",
    "credentialId": "77ZBJZZB4EDF",
    "link": "https://www.coursera.org/account/accomplishments/specialization/77ZBJZZB4EDF"
  },{
    "img_path": "Img/CertificateNSkill/google.svg",
    "company": "Google",
    "title": "IT Automation with Python Specialization",
    "issued": "Mar 2023",
    "credentialId": "44GPS8X5AHGH",
    "link": "https://www.coursera.org/account/accomplishments/specialization/44GPS8X5AHGH"
  },{
    "img_path": "Img/CertificateNSkill/icl.svg",
    "company": "Imperial College London",
    "title": "Mathematics for Machine Learning Specialization",
    "issued": "Mar 2023",
    "credentialId": "5KQ9NEBZ3VLJ",
    "link": "https://www.coursera.org/account/accomplishments/specialization/5KQ9NEBZ3VLJ"
  }
])