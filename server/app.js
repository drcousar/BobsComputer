/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   21 October 2019
; Modified By: Jordan Hennessy
; Description: Bob's Computer Repair Shop
;===========================================
*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const SecurityQuestion = require('./models/securityQuestion');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/bcrs')));
app.use('/', express.static(path.join(__dirname, '../dist/bcrs')));

// Global variables
const serverPort = process.env.PORT || 3000;
const saltRounds = 10;

/************************* Mongoose connection strings go below this line  ***************/
const connString = 'mongodb+srv://admin:group2@bobscomputerrepairshopdb-pzsrm.mongodb.net/bobsrepairdb'

mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to MongoDB instance was successful'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes go below this line ********************/

// User API routes

// Create User

// Get all Users
app.get('/api/users', function(req,res,next) {
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(users);
      res.json(users);
    }
  })
});

// Get User by id
app.get('/api/users/:id', function(req, res, next) {
  User.findOne({'_id': req.params.id}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
});


// Add new User
app.post('/api/users/register', function(req, res, next) {
  User.findOne({'username': req.body.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!user) {
        // The selected username is unique
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        let u = {
          username: req.body.username,
          password: hashedPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          email: req.body.email,
          selectedSecurityQuestions: req.body.selectedSecurityQuestions,
          dateCreated: req.body.dateCreated
        }
        User.create(u, function(err, newUser) {
          if (err) {
            console.log(err);
            return next(err);
          } else {
            console.log(newUser);
            res.json(newUser);
          }
        })
      } else {
        // The selected username is already in use
        console.log('The selected username: ${req.body.username} is already in use!');
        res.status(500).send({
          text: 'The selected username: ${req.body.username} is already in use!',
          time_stamp: new Date()
        })
      }
    }
  })
})

// Update User
app.put('/api/users/:id', function(req, res, next) {

  User.findOne({'_id': req.params.id}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);

      user.set({
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email,
        dateUpdated: new Date()
      })
      user.save(function(err, savedUser) {
        if (err){
          console.log(err);
          return next(err);
        } else {
          console.log(savedUser);
          res.json(savedUser);
        }
      })
    }
  })
})

// Delete User
app.delete('/api/users/:id', function(req, res, next) {
  User.findByIdAndDelete({'_id': req.params.id}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
})


/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});