/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   21 October 2019
; Modified By: Jordan Hennessy & Don Cousar
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

//POST User validating username/pass - Don
app.post('/api/users', function(req, res, next) {

/*  User.findOne({ username: req.body.username }), function(err, user) {
    if(err) {
      console.log(err);
      return next(err);
    } else if (!user) {
      var err = new Error('User not found!');
      console.log(err);
      err.status = 401;
      return next(err);
    } bcrypt.compare(req.body.password, user.password, function(err, result) {
      if (result === true ) {
        console.log(user);
        return next(user);
      } else {
        console.log(err);
        return next(err);
      }
    })
  }*/

  User.findOne({ username: req.body.username }).then(user => {
    console.log('Searching user: ' + req.body.username);

    if(!user) {
      console.log('User not found in db');
      return res.status(401).json({
        message: "Authentication Failure: User not found"
      }); //end return
    }  //end if

    console.log('User sent by form: ' + req.body.password); //sanity check
    console.log('User in db: ' + user.password); //sanity check

    return bcrypt.compare(req.body.password, user.password);

  }).then(result => {
    //console.log('BCrypt Results: '); debug sanity check
    //console.log(result); debug sanity check
    if(result === false) {
      return res.status(401).json({
        message: "Authentication Failure: bad password"
      });
    } else {
      return res.status(200).json({
        //Return Username if successful, this could be anything -Don
      });
    }
  }).catch(err => {
    return res.status(401).json({
      message: "Authentication Failure: Unknown Error"
    });
  });
}); //end POST

// Get User by username
app.get('/api/users/:username', function(req, res, next) {
  User.findOne({'username': req.params.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!user) {
        bcrypt.compare(req.body.password, user.password, function(err, res) {
          if (err) {
            console.log(err);
            return next(err);
          } else {
            console.log(user);
            return next(user);
          }
        })
      } else {
        console.log(err);
      }
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

//Get All Security Questions
app.get('/api/questions', function(req,res,next) {
  SecurityQuestion.find({}, function(err, questions) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(questions);
      res.json(questions);
    }
  })
});

// Get Question by id
app.get('/api/questions/:id', function(req, res, next) {
  SecurityQuestion.findOne({'_id': req.params.id}, function(err, question) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(question);
      res.json(question);
    }
  })
});

// Update Question
app.put('/api/questions/:id', function(req, res, next) {

  SecurityQuestion.findOne({'_id': req.params.id}, function(err, question) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(question);

      question.set({
        questionText: req.body.questionText,
        dateUpdated: new Date()
      })
      question.save(function(err, savedQuestion) {
        if (err){
          console.log(err);
          return next(err);
        } else {
          console.log(savedQuestion);
          res.json(savedQuestion);
        }
      })
    }
  })
})

// Delete Question
app.delete('/api/questions/:id', function(req, res, next) {
  SecurityQuestion.findByIdAndDelete({'_id': req.params.id}, function(err, question) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(question);
      res.json(question);
    }
  })
})

// Add new Question
app.post('/api/questions/add', function(req, res, next) {
  User.findOne({'questionText': req.body.questionText}, function(err, question) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!question) {
        // The selected question is unique
        let q = {
          questionText: req.body.questionText
        }
        SecurityQuestion.create(q, function(err, newQuestion) {
          if (err) {
            console.log(err);
            return next(err);
          } else {
            console.log(newQuestion);
            res.json(newQuestion);
          }
        })
      } else {
        // The selected username is already in use
        console.log('The attempted question: ${req.body.questionText} is already in use!');
        res.status(500).send({
          text: 'The attempted question: ${req.body.questionText} is already in use!',
          time_stamp: new Date()
        })
      }
    }
  })
})

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
