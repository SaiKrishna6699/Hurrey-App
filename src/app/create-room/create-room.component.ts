import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
  animations: [
    trigger('moveFromRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class CreateRoomComponent implements OnInit {

  constructor(private myser: ServiceService, private route: Router) {

  }

  form1: FormGroup

  ngOnInit(): void {
    this.form1 = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.min(1), Validators.max(6)])
    })
  }
  name: String = this.myser.getData();
  avatar: String = this.myser.getAvatar();

  roomName: String;
  roomlength: number;

  onSubmit() {
    this.name = this.form1.controls['name'].value;
    console.log(this.name);
    this.myser.setName(this.name);
    console.log("Service Name:" + this.myser.getData());
    this.route.navigate(['/avatar']);
  }
}

