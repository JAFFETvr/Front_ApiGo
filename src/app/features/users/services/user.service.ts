import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/clients/';

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    console.log('Solicitando usuarios...'); // Log antes de hacer la petición
    return this.http.get<User[]>(this.apiUrl);
  }

  // Agregar un usuario
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Editar usuario
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.Id}`, user);
  }

  // Eliminar usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}