import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
     ReactiveFormsModule, 
     HttpClientModule,
     FormsModule
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
