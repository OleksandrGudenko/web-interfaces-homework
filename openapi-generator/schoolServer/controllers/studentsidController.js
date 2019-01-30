'use strict'

var varstudentsidController = require('./studentsidControllerService');

module.exports.updateStudent = function updateStudent(req, res, next) {
  varstudentsidController.updateStudent(req.swagger.params, res, next);
};

module.exports.funcstudentsidPARAMETERS = function funcstudentsidPARAMETERS(req, res, next) {
  varstudentsidController.funcstudentsidPARAMETERS(req.swagger.params, res, next);
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {
  varstudentsidController.deleteStudent(req.swagger.params, res, next);
};