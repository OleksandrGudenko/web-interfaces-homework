'use strict'

var gradesData = require('./gradesData')

module.exports.updateGrade = function updateGrade(req, res, next) {
  var cId = req.id.value - 1;

  gradesData.list.grades.find( s => {
       if(s.id == cId + 1) {
        gradesData.list.grades[cId].grade = req.undefined.value.grade;
        gradesData.list.grades[cId].course = req.undefined.value.course;
        gradesData.list.grades[cId].student = req.undefined.value.student;
        res.json('Updated course where ID: '+ gradesData.list.grades[cId].id + ', success')
       } 
    })
};

module.exports.funcgradesidPARAMETERS = function funcgradesidPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradesidPARAMETERS'
  });
};

module.exports.deleteGrade = function deleteGrade(req, res, next) {
  var cId = req.id.value;
  for( var i = 0; i < gradesData.list.grades.length; i++){
      if( gradesData.list.grades[i].id == cId){        
        delete gradesData.list.grades[i];
      } else {
        false
      } 
  }
  
  res.send('Delete success');
};