'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.listCourses = function listCourses(req, res, next) {
  varcoursesController.listCourses(req.swagger.params, res, next);
};

module.exports.addCourse = function addCourse(req, res, next) {
  varcoursesController.addCourse(req.swagger.params, res, next);
};