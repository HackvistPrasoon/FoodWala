import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignParam } from './signdata';
import { FoodapiService } from '../shared/foodapi.service';
import { Router } from '@angular/router'; '@angular/Router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  ngOnInit(): void { }
  formsignupvalue!: FormGroup;
  signparam: SignParam = new SignParam;
  constructor(private formbuilder: FormBuilder, private foodservice: FoodapiService, private router: Router) {
    this.formsignupvalue = this.formbuilder.group({
      name: [''],
      phone: [''],
      mail: [''],
      password: [''],
    });
  }

  signupsubmit() {
    console.log('sign up value ', this.formsignupvalue.value);
    this.signparam.name = this.formsignupvalue.value.name;
    this.signparam.mail = this.formsignupvalue.value.mail;
    this.signparam.phone = this.formsignupvalue.value.phone;
    this.signparam.password = this.formsignupvalue.value.password;
    this.foodservice.postsignup(this.signparam).subscribe(post => {
      console.log("post subscribe ", post);
    });
    this.router.navigate(['login']);
    alert('👍 Data Submitted Successfully 🙂 ');
  }
}
