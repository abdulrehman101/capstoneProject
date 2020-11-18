import { UserService } from './../services/user.service';
import { Users } from './../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(result => {
      this.users = result
      console.log(this.users)
    })
  }

}
