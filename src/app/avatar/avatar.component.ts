import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {

  selectedDivIndex: number = null;
  originalScale: string = '1';
  grayscaleFilter: string = 'grayscale(100%)';

  form2: FormGroup;

  name: String = this.myService.getData();

  avatar: String;

  imgSrc: String[];

  constructor(private myService: ServiceService, private router: Router) {
    this.imgSrc = this.myService.avatarArray
  }

  ngOnInit(): void {
    this.avatar = this.form2.controls['avatar'].value;
    console.log(this.avatar);
  }

  onDivClick(index: number) {
    this.selectedDivIndex = index;
    const selectedDiv = document.querySelectorAll('.div-class')[index] as HTMLElement;
    this.originalScale = window.getComputedStyle(selectedDiv).getPropertyValue('transform');
  }

  onAvatarSelected(img: String) {
    console.log('Selected avatar:', img);
    this.avatar = img;
  }

  onSubmit() {
    console.log(this.avatar);
    this.myService.setAvatar(this.avatar);
    console.log("Service Avatar: " + this.myService.avatar);
    this.router.navigate(['/profile'])
  }




}
