'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.listStudents = function listStudents(req, res, next) {
  varstudentsController.listStudents(req.swagger.params, res, next);
};

module.exports.AddStudent = function AddStudent(req, res, next) {
  varstudentsController.AddStudent(req.swagger.params, res, next);
};