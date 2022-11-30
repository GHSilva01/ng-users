import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://localhost:7248/api/Users"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user)
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  readById(id: any): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url)
  }

  update(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`
    return this.http.put<User>(url, user)
  }

  delete(id: any): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url)
  }

}
