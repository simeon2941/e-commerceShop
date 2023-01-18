import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { User } from '../../users';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class HeroesComponent implements OnInit {
  newUser = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    isAdmin:'',
  };
  users: User[] = [];

  constructor(private userService: UserService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);

  }



  add(): void {
    let { name, lastName, email,isAdmin } = this.newUser;
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name,lastName,email } as User)
      .subscribe(user => {
        this.users.push(user);
      });


  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.id).subscribe(
      () => {
         this.snackBar.open(`User ${user.name} has been deleted`, 'Close', {
          duration: 3000,
         });
      }
  );
  }

}
