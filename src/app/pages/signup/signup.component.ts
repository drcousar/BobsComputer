/*
============================================
; Title:  Bob's Computer Signup
; Authors: Don Cousar / Alan Edwards
; Date:   30 October 2019
; Description: Bob's Computer
; Attribution: Form Control Logic inspired by Professor Krasso @Bellevue University
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component'
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
/*
export interface questionArr {
  questionId: string;
  questionText: string;
  answerText: string;
}

const myQuestions: questionArr[] = [
  {questionId: "dcousar", questionText: 'Donald', answerText: 'Cousar'},
  {questionId: "dcousar", questionText: 'Donald', answerText: 'Cousar'},
  {questionId: "dcousar", questionText: 'Donald', answerText: 'Cousar'}
];
*/



export class SignupComponent implements OnInit {
  form: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  PhoneNumber: string = '';
  Email: string = '';
  Username: string = '';
  Password: string = '';
  ConfirmPassword: string = '';
  questions: any;
  secQuestion1: string;
  secQuestion2: string;
  secQuestion3: string;
  secAnswer1: string;
  secAnswer2: string;
  secAnswer3: string;

  myQuestionText1: any;
  myQuestionText2: any;
  myQuestionText3: any;
  
  myResult: any;
  
  securityQuestions = new Array<SecurityQuestionType>();

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router, private dialog: MatDialog) {

  //Call Jordan's API to get all users
  this.http.get('/api/questions').subscribe(res => {
    this.questions = res;

    //Prove that this.users is populated
    console.log('API GET Questions: ');
    console.table(this.questions);

  }, err => {
    console.log('API GET QUESTIONS ERROR: ' + err);
  },
  () => {
    //What to do upon success
    //nothing for now
  });
   }

   /**
    * Register user with form input
    */
   register() {
    console.log(this.FirstName);
    console.log(this.secQuestion3);

    //STEP 1 Validate all Fields    

    this.validateFields();

    //STEP 2: Build array of security questions and answers
  
    this.pushQuestionArr(this.secQuestion1, this.secAnswer1);
    this.pushQuestionArr(this.secQuestion2, this.secAnswer2);
    this.pushQuestionArr(this.secQuestion3, this.secAnswer3);

    //Write array of security questions to console
    console.log(this.securityQuestions);

    //Assemble array for security questions
    //this.checkUser(this.Username);

    this.http.post('/api/users/register', {
      username: this.Username,
      password: this.Password,
      firstName: this.FirstName,
      lastName: this.LastName,
      phoneNumber: this.PhoneNumber,
      address: this.Address,
      email: this.Email,
      selectedSecurityQuestions: this.securityQuestions
      
    }).subscribe(res => {
      this.passMessage("User added successfully");
      this.router.navigate(['/']);
    })
    
   
  } //END REGISTER FUNCTION

/**
 * Get question text for a particular ID
 * @param id - ID from security questions collection
 */
  pushQuestionArr(id, answer) {
    let quest: any;

      //Call Jordan's API to get question by id
      this.http.get('/api/questions/' + id).subscribe(res => {
        quest = res['questionText'];
        this.securityQuestions.push({questionId: id, questionText: quest, answerText: answer});
        //debug verification
        console.log('getQuestion(): API GET Question: ');
        console.table(quest);
      }, err => {
        console.log('getQuestion(): API GET QUESTIONS ERROR: ' + err);
      },
      () => {
        //What to do upon success
      });
  }

 /**
  * Send message to dialog modal and open dialog
  * @param message Message text to send to dialog
  */
  passMessage(message) {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      data: {
        message: message
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  /**
   * Validate all Fields
   */
  validateFields() {
    if(!this.FirstName) {
      this.passMessage('Error: First Name is a required field');
    }

    if(!this.LastName) {
      this.passMessage('Error: Last Name is a required field');
    }

    if(!this.Address) {
      this.passMessage('Error: Address is a required field');
    }

    if(!this.PhoneNumber) {
      this.passMessage('Error: Phone Number is a required field');
    }

    if(!this.Email) {
      this.passMessage('Error: Email is a required field');
    }

    if(!this.Username) {
      this.passMessage('Error: Username is a required field');
    }

    if(!this.Password) {
      this.passMessage('Error: Password is a required field');
    }

    if(!this.ConfirmPassword) {
      this.passMessage('Error: Confirm Password is a required field');
    }

    if(!this.secQuestion1) {
      this.passMessage('Error: Security Question 1 is a required field');
    }

    if(!this.secQuestion2) {
      this.passMessage('Error: Security Question 2 is a required field');
    }

    if(!this.secQuestion3) {
      this.passMessage('Error: Security Question 3 is a required field');
    }

    if(!this.secAnswer1) {
      this.passMessage('Error: Security Answer 1 is a required field');
    }

    if(!this.secAnswer2) {
      this.passMessage('Error: Security Answer 2 is a required field');
    }

    if(!this.secAnswer3) {
      this.passMessage('Error: Security Answer 3 is a required field');
    }

    if(this.Password != this.ConfirmPassword) {
      this.passMessage('Error: Passwords Do no match');
    }

    return;
  }

  checkUser(uname) {
    
    this.http.get('/api/usersignin/' + uname).subscribe(res => {
      if(!res) {
        console.log('user not found');
      } else {
        console.log('user found');
      }
    }, err => {
      console.log('getQuestion(): API GET QUESTIONS ERROR: ' + err);
      this.passMessage('Error: Username already taken');
      return;
    },
    () => {
      //What to do upon success
    });
  }

 /**
  * cancel out of signup form and go back to the home page
  */
  cancel() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    type SecurityQuestionType = { questionId: string, questionText: string, answerText: string } ;

    this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      confirmpassword: [null, Validators.compose([Validators.required])],
      secAnswer1: [null, Validators.compose([Validators.required])],
      secAnswer2: [null, Validators.compose([Validators.required])],
      secAnswer3: [null, Validators.compose([Validators.required])]
    })
  }

}
//Declare Custom Array Type
type SecurityQuestionType = { questionId: string, questionText: string, answerText: string } ;