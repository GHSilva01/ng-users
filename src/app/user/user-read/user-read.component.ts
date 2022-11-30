import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]
  displayedColumns = ['id', 'name', 'cpf', 'email', 'action']

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users
    })
  }

}
