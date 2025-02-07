import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService,} from '../../services/user.service';
import { User } from '../../interface/users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;
  @Output() userAdded = new EventEmitter<User>(); // Para notificar cuando se agregue un usuario

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser).subscribe((user) => {
        this.userAdded.emit(user); // Emitir el usuario agregado
        this.userForm.reset();
      });
    }
  }
}
