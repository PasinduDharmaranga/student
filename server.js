var express = require('express');
var app = express();
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

//Copy and paste the script from random_data/marks.js above this comment and start the server using 'nodemon server.js'
// Then execute the below post request 'localhost:3000/loadData' without any params to generate and the dataset

app.post('/loadData', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('student_details');
        dbo.collection('marks').insertMany(marks,
            function (err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
});

app.get('/id/:student_id', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("student_details");
        dbo.collection("marks").findOne({
            student_id: req.params.student_id
        },
            function (err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
});

app.get('/grade/:grade', (req, res) => {
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;
        var dbo = db.db("student_details");
        dbo.collection("marks").find({}).toArray(function (err, result) {
            if (err) throw err;
            let final_result = [];
            for (obj in result) {
                for (obj2 in result[obj].s_marks) {
                    let filterByGrade = {};
                    if (result[obj].s_marks[obj2].grade == req.params.grade) {
                        filterByGrade.id = result[obj].student_id;
                        filterByGrade.marks = result[obj].s_marks[obj2];
                        final_result.push(filterByGrade)
                    }
                }
            }
            res.json(final_result);
            db.close();
        });
    });
});

app.get('/year/:academic_year', (req, res) => {
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;
        var dbo = db.db("student_details");
        dbo.collection("marks").find({}).toArray(function (err, result) {
            if (err) throw err;
            let final_result = [];
            for (obj in result) {
                for (obj2 in result[obj].s_marks) {
                    let filterByAcademicYear = {};
                    if (result[obj].s_marks[obj2].academic_year == req.params.academic_year) {
                        filterByAcademicYear.id = result[obj].student_id;
                        filterByAcademicYear.marks = result[obj].s_marks[obj2];
                        final_result.push(filterByAcademicYear)
                    }
                }
            }
            res.json(final_result);
            db.close();
        });
    });
});

app.get('/subject/:subject_name', (req, res) => {
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;
        var dbo = db.db("student_details");
        dbo.collection("marks").find({}).toArray(function (err, result) {
            if (err) throw err;
            let final_result = [];
            for (obj in result) {
                for (obj2 in result[obj].s_marks) {
                    for (obj3 in result[obj].s_marks[obj2].semester_1) {
                        let filterByAcademicSubject = {};
                        if (result[obj].s_marks[obj2].semester_1[obj3].subject_name == req.params.subject_name) {
                            filterByAcademicSubject.id = result[obj].student_id;
                            filterByAcademicSubject.subject_name = req.params.subject_name;
                            filterByAcademicSubject.semester_1 = result[obj].s_marks[obj2].semester_1[obj3].marks;
                            filterByAcademicSubject.semester_2 = result[obj].s_marks[obj2].semester_2[obj3].marks;

                            final_result.push(filterByAcademicSubject)
                        }
                    }
                }
            }
            res.json(final_result);
            db.close();
        });
    });
});

app.get('/complete/:student_id', (req, res) => {
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;
        var dbo = db.db("student_details");
        dbo.collection("marks").find({}).toArray(function (err, result) {
            if (err) throw err;
            let final_result = [];
            for (obj in result) {
                let filterByAcademicSubject = {};
                if (result[obj].student_id == req.params.student_id) {
                    filterByAcademicSubject.id = result[obj].student_id;
                    filterByAcademicSubject.marks = result[obj].s_marks;

                    final_result.push(filterByAcademicSubject)
                }
            }
            res.json(final_result);
            db.close();
        });
    });
});

app.listen(3000, () => {
    console.log('Server listening on 3000');
})