'use strict'

var coursesData = require('./coursesData');

module.exports.listCourses = function listCourses(req, res, next) {
  res.json({
    coursesData
  });
};

module.exports.addCourse = function addCourse(req, res, next) {
  console.log(req)
  coursesData.list.courses.push({
    id: coursesData.list.courses.length +1,
    name: req.undefined.value.name,
    credits: req.undefined.value.credits
  })
  res.send( {message: "success"} )
};