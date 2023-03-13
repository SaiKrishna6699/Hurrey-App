import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [
    trigger('moveFromLeft', [
      state('void', style({ transform: 'translate(-100%,-50%)', })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translate(-50%,-50%)' }))
      ])
    ])
  ]
})
export class UserProfileComponent {

  constructor(private mySer: ServiceService, private router: Router){

  }

  avatar: String = this.mySer.getAvatar();
  name: String = this.mySer.getData();


  onsubmit1(){
    this.router.navigate(['/join']);
  }

  onsubmit2(){
    this.router.navigate(['/create']);
  }
}
