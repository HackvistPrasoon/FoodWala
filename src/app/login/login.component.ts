import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodapiService } from '../shared/foodapi.service';
import { LoginParam } from '../signup/signdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private foodapi: FoodapiService,
    private router :Router
  ) { }
  formvalue!: FormGroup;
  loginparam: LoginParam = new LoginParam;

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({ mail: [''], password: [''] });
  }

  loginSubmit() {
    console.log(this.formvalue.value);
    this.loginparam.mail = this.formvalue.value.mail;
    this.loginparam.password = this.formvalue.value.password;
    this.foodapi.getsignup().subscribe(get =>{
      const user = get.find((a:any) =>{
        return a.mail == this.loginparam.mail && a.password == this.loginparam.password;
      });
      if(user){
        alert("Login Successfully 😍");
        this.router.navigate(['dashboard']);
        this.formvalue.reset();
      }else{
        alert("oops email and password may be wrong 🤦‍♀️");  
      }
   
    });
    this.formvalue.reset();
    
  }
}
