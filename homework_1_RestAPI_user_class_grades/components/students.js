const express = require('express');
let router = express.Router();


const studentData = {
  students:  [
  { 
    id: '1',
    name: 'Max Cool',
    class: 'Din17sp',
    address: 'Kotkantie 1'
  },
  { 
    id: '2',
    name: 'Sue Black',
    class: 'Din17sp',
    address: 'Kotkantie 1'
  },
  { 
    id:'3',
    name: 'Doe Greg',
    class: 'Din17sp',
    address: 'Kotkantie 1'
  }]

}

//return all students
router.get('/', (req, res) => { res.json(studentData) });

//add new student
router.post('/', (req, res) => {

    studentData.students.push({
        id: studentData.students.length +1,
        name: req.body.name,
        address: req.body.address,
        class: req.body.class
    })
    
    res.sendStatus(201);
    
})

// edit student
router.put('/:studId', (req, res) => {
    var sId = req.params.studId - 1;
    

    studentData.students.find( s => {
       if(s.id == sId) {
        studentData.students[sId].name = req.body.name;
        studentData.students[sId].class = req.body.class;
        studentData.students[sId].address = req.body.address;
        res.json('PUT done')//,

       } 
    })
})

//remove student
router.delete('/:studId', function(req, res){
    var sId = req.params.studId - 1;
    delete studentData.students[sId];
    res.send('Delete ok');
});


module.exports = router