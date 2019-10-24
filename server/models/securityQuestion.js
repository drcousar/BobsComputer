/*
============================================
; Title:  securityQuestion.js
; Author: Professor Krasso
; Date:   23 October 2019
; Modified By: Jordan Hennessy
; Description: Bobs Computer
;===========================================
*/

const mongoose = require('mongoose');

let securityQuestionSchema = mongoose.Schema({
  questionText: {type: String}
}, {collection: 'securityQuestions'});

module.exports = mongoose.model('SecurityQuestion', securityQuestionSchema);
