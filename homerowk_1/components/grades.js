const express = require('express');
let router = express.Router();


const gradesData = {
    grades:  [
  { 
    id: '1',
    student: 'Max Cool',
    course: 'React',
    grade: '4'
  },
  { 
    id: '2',
    student: 'Sue Black',
    course: 'Javascript',
    grade: '1'
  },
  { 
    id:'3',
    student: 'Doe Greg',
    course: 'REST_API',
    grade: '3'
  }]

}

//return all grades
router.get('/', (req, res) => { res.json(gradesData) });

//add new grade
router.post('/', (req, res) => {

    gradesData.grades.push({
        id: gradesData.grades.length +1,
        student: req.body.student,
        course: req.body.course,
        grade: req.body.grade
    })
    
    res.sendStatus(201);
    
})

// edit grade
router.put('/:gradeId', (req, res) => {
    var gId = req.params.gradeId - 1;
    

    gradesData.grades.find( s => {
       if(s.id == gId) {
        gradesData.grades[gId].student = req.body.student;
        gradesData.grades[gId].course = req.body.course;
        gradesData.grades[gId].grade = req.body.grade;
        res.json('PUT done')//,

       } 
    })
})

//remove grade
router.delete('/:gradeId', function(req, res){
    var gId = req.params.gradeId - 1;
    delete gradesData.grades[gId];
    res.send('Delete ok');
});


module.exports = router