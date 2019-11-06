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
const Role = require('./models/role');

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

  User.findOne({ username: req.body.username }).then(user => {
    console.log('Searching user: ' + req.body.username);

    if(!user) {
      console.log('User not found in db');
      return res.status(401).json({
        message: "Authentication Failure: User not found"
      }); //end return
    }  //end if

    //console.log('User sent by form: ' + req.body.password); //sanity check
    //console.log('User in db: ' + user.password); //sanity check

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
app.get('/api/users/getuname/:username', function(req, res, next) {
  User.findOne({'username': req.params.username}, function(err, user) {
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
  console.log('Debug: Show Sec Questions');
  console.log(req.body.selectedSecurityQuestions);
  User.findOne({'username': req.body.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!user) {
        // The selected username is unique
        console.table(req.body);
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
        role: req.body.role,
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

// Forgot password APIs

// Get user by username
app.get('/api/verify/users/:username', function (req, res, next) {
  User.findOne({'username': req.params.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
});

app.get('/api/users/:username/security-questions', function (req, res, next) {
  User.findOne({'username': req.params.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user.selectedSecurityQuestions);
      res.json(user.selectedSecurityQuestions);
    }
  })
});

// Check security questions
app.post('/api/verify/users/:username/security-questions', function (req, res, next) {
  const answerToSecurityQuestion1 = req.body.answerToSecurityQuestion1;
  console.log(answerToSecurityQuestion1);

  const answerToSecurityQuestion2 = req.body.answerToSecurityQuestion2;
  console.log(answerToSecurityQuestion2);

  const answerToSecurityQuestion3 = req.body.answerToSecurityQuestion3;
  console.log(answerToSecurityQuestion3);

  User.findOne({'username': req.params.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);

      let answer1IsValid = answerToSecurityQuestion1 === user.selectedSecurityQuestions[0].answerText;
      console.log(answer1IsValid);

      let answer2IsValid = answerToSecurityQuestion2 === user.selectedSecurityQuestions[1].answerText;
      console.log(answer2IsValid);

      let answer3IsValid = answerToSecurityQuestion3 === user.selectedSecurityQuestions[2].answerText;
      console.log(answer3IsValid);

      if (answer1IsValid && answer2IsValid && answer3IsValid) {
        res.status(200).send({
          type: 'success',
          auth: true
        })
      } else {
        res.status(200).send({
          type: 'error',
          auth: false
        })
      }
    }
  })
});

// Change password
app.post('/api/users/:username/reset-password', function (req, res, next) {
  const password = req.body.password;

  User.findOne({'username': req.params.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);

      let hashedPassword = bcrypt.hashSync(password, saltRounds);

      user.set({
        password: hashedPassword
      });

      user.save(function (err, user) {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(user);
          res.json(user);
        }
      })
    }
  })
});

// Security Question APIs
// Get Security Question by ID
app.get('/api/find-by-ids/:id', function (req, res, next) {
  SecurityQuestion.findOne({'_id': req.params.id}, function (err, securityQuestion) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestion);
      res.json(securityQuestion);
    }
  })
});

app.post('/api/find-by-ids', function (req, res, next) {
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const question3 = req.body.question3;
  console.log(question1);

  SecurityQuestion.find({
    $or: [
      {'_id': question1},
      {'_id': question2},
      {'_id': question3}
    ]
  }).exec(function (err, securityQuestions) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestions);
      res.json(securityQuestions);
    }
  })
});

// Roles API
// Get all Roles
app.get('/api/roles', function(req, res, next) {
  Role.find({}, function(err, roles) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(roles);
      res.json(roles);
    }
  })
});

// Get Role by ID
app.get('/api/roles/:id', function(req, res, next) {
  Role.findOne({'_id': req.params.id}, function(err, role) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(role);
      res.json(role);
    }
  })
});

// Create new role
app.post('/api/roles/add', function(req, res, next) {
  Role.findOne({'name': req.body.name}, function(err, role) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!role) {
        let r = {
          name: req.body.name
        }
        Role.create(r, function(err, newRole) {
          if (err) {
            console.log(err);
            return next(err);
          } else {
            console.log(newRole);
            res.json(newRole);
          }
        })
      } else {
        console.log('${req.body.name} is already a user role!');
        res.status(500).send({
          test: '${req.body.name} is already a user role!',
          time_stamp: new Date()
        })
      }
    }
  })
});

// Update role
app.put('/api/roles/:id', function(req, res, next) {
  Role.findOne({'_id': req.params.id}, function(err, role) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      role.set({
        name: req.body.name
      })
      role.save( function(err, savedRole) {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedRole);
          res.json(savedRole);
        }
      })
    }
  })
});

// Delete role
app.delete('/api/roles/:id', function(req, res, next) {
  Role.findByIdAndDelete({'_id': req.params.id}, function(err, role) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(role);
      res.json(role);
    }
  })
})

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
