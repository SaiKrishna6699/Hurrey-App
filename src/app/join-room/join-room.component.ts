import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css'],
  animations: [
    trigger('moveFromRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class JoinRoomComponent implements OnInit{

  constructor( private myService: ServiceService, private router: Router) {

  }
  ngOnInit(): void {
    this.form1 = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6}$/),])
    })

    // this.form1 = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    // });
  }

  form1: FormGroup;

  name:String = this.myService.getData();

  avatar: String = this.myService.getAvatar();

  code: number;

  disableScroll(event: WheelEvent) {
    event.preventDefault();
  }

  onSubmit(){
    this.name = this.form1.controls['name'].value;
    console.log(this.name); 
    this.myService.setName(this.name);
    console.log("Service Name:" + this.myService.getData());
    this.router.navigate(['/avatar']);
  }


}
