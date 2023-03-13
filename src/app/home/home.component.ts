import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scale', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('900ms ease-out', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor( private myService: ServiceService, private router: Router) { }

  form1: FormGroup;


  showDiv = true;
  formDiv = false;

  name: String;

  onSubmit(){
    this.name = this.form1.controls['name'].value;
    console.log(this.name); 
    this.myService.setName(this.name);
    console.log("Service Name:" + this.myService.getData());
    this.router.navigate(['/avatar']);

    // this.dataService.setData(this.name);
  }

  ngOnInit() {
    this.form1 = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    });
    
    setTimeout(() => {
      this.showDiv = false;
      this.formDiv = true;
    }, 2000); // Delay for 2 second before showing the div 
  }

}
