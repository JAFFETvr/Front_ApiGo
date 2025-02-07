import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/users';

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

  editUser(updatedUser: User) {
    this.userService.updateUser(updatedUser).subscribe(() => {
      const index = this.users.findIndex(user => user.Id === updatedUser.Id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.Id !== id);
    });
  }
}
