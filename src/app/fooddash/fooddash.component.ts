import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurentData } from './restaurent.model';
import { FoodapiService } from 'src/app/shared/foodapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fooddash',
  templateUrl: './fooddash.component.html',
  styleUrls: ['./fooddash.component.css'],
})
export class FooddashComponent implements OnInit {
  formValue!: FormGroup;
  datasub: any;
  getAllRestaurentData: any;
  RestaurentDataObj: RestaurentData = new RestaurentData();

  constructor(private formBuild: FormBuilder, private foodobj: FoodapiService,private router : Router) {
    console.log('constructor is running ');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.formValue = this.formBuild.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],
    });
    console.log('formdata ', this.formValue.value);
    this.showRestaurent();
  }

  //subscribing data
  addResto() {
    this.RestaurentDataObj.name = this.formValue.value.name;
    this.RestaurentDataObj.email = this.formValue.value.email;
    this.RestaurentDataObj.mobile = this.formValue.value.mobile;
    this.RestaurentDataObj.address = this.formValue.value.address;
    this.RestaurentDataObj.service = this.formValue.value.service;
    console.log('data ', this.formValue.value);
    this.datasub = this.foodobj
      .postRestaurent(this.RestaurentDataObj)
      .subscribe((res) => {
        console.log('data saved successfully ',this.datasub);
      });
      alert('Record Added Successfully 👍🙂');
      let element: HTMLElement = document.getElementById('close') as HTMLElement;
      element.click();
      this.formValue.reset();
      this.showRestaurent();
  }

  showRestaurent() {
    this.foodobj.getRestaurent().subscribe((res) => {
      this.getAllRestaurentData = res;
    });
  }

  deleteRestaurent(id: number) {

    if(confirm("Are you sure to delete this item . ")) {
      this.foodobj.deleteRestaurent(id).subscribe((deleterow) => {
        console.log('Delete log ');
        this.showRestaurent();
      });
    }
  }

  // trigger on edit button
  editRestaurent(data: any) {
    console.log('onclick edit event ',data);
    this.RestaurentDataObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['service'].setValue(data.service);
    this.formValue.controls['address'].setValue(data.address);    
  }

// trigger on update  button
  updateRestaurant() {
    this.RestaurentDataObj.name = this.formValue.value.name;
    this.RestaurentDataObj.email = this.formValue.value.email;
    this.RestaurentDataObj.mobile = this.formValue.value.mobile;
    this.RestaurentDataObj.address = this.formValue.value.address;
    this.RestaurentDataObj.service = this.formValue.value.service;
    console.log('data ', this.formValue.value);
    this.datasub = this.foodobj
      .editRestaurent(this.RestaurentDataObj,this.RestaurentDataObj.id)
      .subscribe((res) => {
        console.log('data Edited successfully 🙂',this.datasub);
      });
      alert('Record Changed Successfully 🙂');
      let element: HTMLElement = document.getElementById('closeedit') as HTMLElement;
      element.click();
      this.formValue.reset();
      this.showRestaurent();
  }

  logout(){
   this.router.navigate(['/login']);
  }
  

 
  ngOnDestroy() {
    console.log('ngOnDestroy');
   // this.datasub.unsubscribe();
  }
  ngOnchanges() {
    console.log('ngOnchanges');
  }
}
