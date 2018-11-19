import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth/auth.service';
// import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']

})
export class LoginComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
      this.loginUser()
  }

  loginUser (){
    console.log("hello")
  }

}