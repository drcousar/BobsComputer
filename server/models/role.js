/*
============================================
; Title:  role.js
; Author: Jordan Hennessy
; Date:   5 November 2019
; Description: Bobs Computer
;===========================================
*/

const mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
  name: {type: String}
}, {collection: 'roles'});

module.exports = mongoose.model('Role', roleSchema);
