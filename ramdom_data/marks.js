let chance = require('chance').Chance();
const age_init = 6;
const academic_year_init = 2000;
const marks = []
let annual_marks = []
for (let i = 0; i < 20; i++) {
    let student_marks = {
        "student_id": `S${i}`,
        "name": chance.name(),
        "age": age_init + i,
    }

    for (let j = 0; j < 10; j++) {
        let S_marks = {
            "grade": j,
            "academic_year": academic_year_init + j,
            "semester_1": [

                {
                    "subject_name": "Mathematics",
                    "marks": chance.integer({ min: 0, max: 100 })
                },
                {
                    "subject_name": "Sinhala",
                    "marks": chance.integer({ min: 0, max: 100 })
                },
                {
                    "subject_name": "English",
                    "marks": chance.integer({ min: 0, max: 100 })
                }
            ],
            "semester_2": [

                {
                    "subject_name": "Mathematics",
                    "marks": chance.integer({ min: 0, max: 100 })
                },
                {
                    "subject_name": "Sinhala",
                    "marks": chance.integer({ min: 0, max: 100 })
                },
                {
                    "subject_name": "English",
                    "marks": chance.integer({ min: 0, max: 100 })
                }
            ]
        }
        annual_marks.push(S_marks)
    }
    student_marks.s_marks = annual_marks;
    annual_marks = [];
    marks.push(student_marks)
}