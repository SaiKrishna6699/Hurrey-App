import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './service/service.service';

import { AvatarComponent } from './avatar/avatar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvatarComponent,
    UserProfileComponent,
    CreateRoomComponent,
    JoinRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
