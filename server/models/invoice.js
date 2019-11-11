/*
============================================
; Title:  invoice.js
; Author: Jordan Hennessy
; Date:   6 November 2019
; Description: Bob's Computer Repair Shop
;===========================================
*/

const mongoose = require('mongoose');

let selectedServices = mongoose.Schema({
  serviceName: {type: String},
  serviceCost: {type: Number}
});


let invoiceSchema = mongoose.Schema({
  username: {type: String},
  number: {type: String},
  selectedServices: [selectedServices],
  dateCreated: {type: Date, default: new Date()},
  partsCost: {type: String},
  laborHours: {type: String},
  selectedServicesTotal: {type: String},
  total: {type: String}
}, {collection: 'invoices'});

module.exports = mongoose.model('Invoice', invoiceSchema);
