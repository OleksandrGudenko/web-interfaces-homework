'use strict'

var vargradesController = require('./gradesControllerService');

module.exports.listGrades = function listGrades(req, res, next) {
  vargradesController.listGrades(req.swagger.params, res, next);
};

module.exports.addGrade = function addGrade(req, res, next) {
  vargradesController.addGrade(req.swagger.params, res, next);
};