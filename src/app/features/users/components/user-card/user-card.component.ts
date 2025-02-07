import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interface/users';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();

  isEditModalOpen = false;
  editedUser!: User;

  ngOnInit() {
    this.editedUser = { ...this.user };
  }

  openEditModal() {
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  saveEdit() {
    this.editUser.emit(this.editedUser);
    this.closeEditModal();
  }

  onDelete() {
    if (!this.user.Id) {
      console.error('El usuario no tiene un ID válido:', this.user);
      return;
    }
    this.deleteUser.emit(this.user.Id);
  }
}
