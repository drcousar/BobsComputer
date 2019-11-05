/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   23 October 2019
; Modified By: Jordan Hennessy
; Description: Bob's Computer Repair Shop
;===========================================
*/

const mongoose = require('mongoose');

let selectedSecurityQuestions = mongoose.Schema({
  answerText: {type: String},
  questionId: {type: String},
<<<<<<< HEAD
  questionText: {type: String }
  
=======
  questionText: {type: String},
  answerText: {type: String}
>>>>>>> d806ec0cd1135c5f7fc80dbfcc5ef55b94246190
});


let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true, dropDups: true},
  password: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  phoneNumber: {type: String},
  address: {type: String},
  email: {type:  String, unique: true},
  role: {type: String, default: 'standard'},
  selectedSecurityQuestions: [selectedSecurityQuestions],
  dateCreated: {type: Date, default: new Date()},
  dateModified: {type: Date}
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);
