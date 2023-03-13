import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  name: String;
  avatar: String;

  avatarArray: String[] =[
    'assets/Avatar1.png',
    'assets/Avatar2.png',
    'assets/Avatar3.png',
    'assets/Avatar4.png',
    'assets/Avatar5.png',
  ]

  setAvatar(avatar: String){
    this.avatar = avatar;
  }

  getAvatar(){
    return this.avatar;
  }

  setName(name: String){
    this.name = name;
  }

  getData(){
    return this.name;
  }

  constructor() { }
}
