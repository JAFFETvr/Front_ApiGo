import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interface/users';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() editUser = new EventEmitter<User>(); // Para emitir cambios
  @Output() deleteUser = new EventEmitter<number>(); // Para eliminar

  isEditModalOpen = false;
  editedUser!: User;

  openEditModal() {
    this.editedUser = { ...this.user }; // Clonar el usuario
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  saveEdit() {
    this.editUser.emit(this.editedUser); // Emitir cambios
    this.isEditModalOpen = false;
  }

  onDelete() {
    this.deleteUser.emit(this.user.id);
  }
}
