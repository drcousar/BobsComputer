/*
============================================
; Title:  purchases.js
; Author: Jordan Hennessy
; Date:   6 November 2019
; Description: Bobs Computer
;===========================================
*/

const mongoose = require('mongoose');

let purchaseSchema = mongoose.Schema({
  serviceName: {type: String},
  dateCreated: {type: Date, default: new Date()}
}, {collection: 'purchases'});

module.exports = mongoose.model('Purchase', purchaseSchema);
