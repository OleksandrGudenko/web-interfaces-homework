'use strict'

var studentsData = require('./studentsData');


module.exports.updateStudent = function updateStudent(req, res, next) {
  var cId = req.id.value - 1;

  studentsData.list.students.find( s => {
       if(s.id == cId + 1) {
        studentsData.list.students[cId].firstName = req.undefined.value.firstName;
        studentsData.list.students[cId].lastName = req.undefined.value.lastName;
        studentsData.list.students[cId].class = req.undefined.value.class;
        studentsData.list.students[cId].address = req.undefined.value.address;
        res.json('Updated course where ID: '+ studentsData.list.students[cId].id + ', success')
       } 
    })
};

module.exports.funcstudentsidPARAMETERS = function funcstudentsidPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsidPARAMETERS'
  });
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {
  var cId = req.id.value;
  for( var i = 0; i < studentsData.list.students.length; i++){
      if( studentsData.list.students[i].id == cId){        
        delete studentsData.list.students[i];
      } else {
        false
      } 
  }
  
  res.send('Delete success');
};