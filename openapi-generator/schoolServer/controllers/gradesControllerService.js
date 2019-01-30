'use strict'

var gradesData = require('./gradesData')

module.exports.listGrades = function listGrades(req, res, next) {
  res.json({
    gradesData
  })
};

module.exports.addGrade = function addGrade(req, res, next) {
  console.log(req)
  gradesData.list.grades.push({
    id: gradesData.list.grades.length +1,
    grade: req.undefined.value.grade,
    course: req.undefined.value.course,
    student: req.undefined.value.student,
  })
  res.send( {message: "Post success"} )
};