import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:'avatar', component:AvatarComponent},
  {path:'profile', component:UserProfileComponent},
  {path:'join', component:JoinRoomComponent},
  {path:'create', component:CreateRoomComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
