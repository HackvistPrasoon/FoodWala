import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env}  from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodapiService {

  constructor(private http:HttpClient) {

   }
 
  //post  
   postRestaurent(data:any){
    let post ='/posts';
    return this.http.post<any>(env.url+post,data);
   }

 //get 
   getRestaurent(){
    let post ='/posts';
    return this.http.get<any>(env.url+post);
  }

 //put 
  editRestaurent(data:any,id:number){
    const post ='/posts/'
    return this.http.put<any>(env.url+post+id,data);
  }

  //delete
  deleteRestaurent(id:number){
    const post ='/posts/'
    return this.http.delete<any>(env.url+post+id);
  }
    
  //post sign up

  postsignup(data:any){
   const post ='/signup/'; 
   return this.http.post<any>(env.url+post,data);
  }

  //get sign up 
  getsignup(){
    const post ='/signup/'; 
    return this.http.get<any>(env.url+post);
   }

}
