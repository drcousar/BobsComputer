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
  serviceId: {type: String},
  serviceName: {type: String},
  serviceCost: {type: String}
});


let invoiceSchema = mongoose.Schema({
  userId: {type: String},
  number: {type: String},
  selectedServices: [selectedServices],
  dateCreated: {type: Date, default: new Date()},
  partsCost: {type: String},
  laborHours: {type: String},
  total: {type: String}
}, {collection: 'invoices'});

module.exports = mongoose.model('Invoice', invoiceSchema);
