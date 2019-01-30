'use strict'

var coursesData = require('./coursesData');

module.exports.updateCourse = function updateCourse(req, res, next) {
  var cId = req.id.value - 1;

  coursesData.list.courses.find( s => {
       if(s.id == cId + 1) {
        coursesData.list.courses[cId].name = req.undefined.value.name;
        coursesData.list.courses[cId].credits = req.undefined.value.credits;
        res.json('Updated course where ID: '+ coursesData.list.courses[cId].id + ', success')
       } 
    })
};

module.exports.deleteCourse = function deleteCourse(req, res, next) {
  var cId = req.id.value;
  for( var i = 0; i < coursesData.list.courses.length; i++){
      if( coursesData.list.courses[i].id == cId){        
        delete coursesData.list.courses[i];
      } else {
        false
      } 
  }
  
  res.send('Delete success');
};

module.exports.funccoursesidPARAMETERS = function funccoursesidPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursesidPARAMETERS'
  });
};