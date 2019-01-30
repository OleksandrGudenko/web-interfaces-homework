'use strict'

var varcoursesidController = require('./coursesidControllerService');

module.exports.updateCourse = function updateCourse(req, res, next) {
  varcoursesidController.updateCourse(req.swagger.params, res, next);
};

module.exports.deleteCourse = function deleteCourse(req, res, next) {
  varcoursesidController.deleteCourse(req.swagger.params, res, next);
};

module.exports.funccoursesidPARAMETERS = function funccoursesidPARAMETERS(req, res, next) {
  varcoursesidController.funccoursesidPARAMETERS(req.swagger.params, res, next);
};