import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupMessage="";
  helper="";

  constructor() { }
  
  signup = function(){
    if(this.firstName != null&&this.lastName != null && this.email!=null){
      this.signupMessage = "You have successfully signed up, " + this.firstName + " "+this.lastName+".";
    }
    else{
      this.signupMessage = "All fields must be filled out!";
    }
    
  }

  ngOnInit() {
  }

}
