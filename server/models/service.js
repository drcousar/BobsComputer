/*
============================================
; Title:  securityQuestion.js
; Author: Jordan Hennessy
; Date:   6 November 2019
; Description: Bobs Computer
;===========================================
*/

const mongoose = require('mongoose');

let serviceSchema = mongoose.Schema({
  serviceName: {type: String},
  cost: {type: Number}
}, {collection: 'services'});

module.exports = mongoose.model('Service', serviceSchema);
