import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/users';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe((newUser) => {
      this.users.push(newUser);
    });
  }

  editUser(user: User) {
    console.log('Editar usuario:', user);
    // Aquí puedes abrir un formulario o realizar otra acción para editar
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
