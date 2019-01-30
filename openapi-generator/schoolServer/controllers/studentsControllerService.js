'use strict'
var studentsData = require('./studentsData');


module.exports.listStudents = function listStudents(req, res, next) {
  res.json({
    studentsData
  })
};

module.exports.AddStudent = function AddStudent(req, res, next) {
  console.log(req)
  studentsData.list.students.push({
    id: studentsData.list.students.length +1,
    firstName: req.undefined.value.firstName,
    lastName: req.undefined.value.lastName,
    class: req.undefined.value.class,
    address: req.undefined.value.address
  })
  res.send( {message: "POST success"} )
};