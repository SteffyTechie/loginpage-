

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
     selector: 'app-login',
     standalone: true,
     imports: [
       ReactiveFormsModule,
         ],
     templateUrl: './login.component.html',
      styleUrl: './login.component.css',
   })
export class LoginComponent {
loginForm:  FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
             password: new FormControl('', [Validators.required]),
      });
  }

  
  onSubmit() {
    if(this.loginForm.valid){
      this.http
      .post('http://localhost:8080/user/login', {
                  username: this.loginForm.value.username,
                  password: this.loginForm.value.password,
                })
      .subscribe((data) =>{
       if(data){
        this.router.navigate(['/home']);
      }else{
        alert("Invalid Username&Password")
      }
      });
    }else{
      alert("please enter Username&Password")
    }
    }
}