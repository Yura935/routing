import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-userslist',
  templateUrl: './works-userslist.component.html',
  styleUrls: ['./works-userslist.component.scss']
})
export class WorksUserslistComponent implements OnInit {
  users: Array<any> = [];
  newLogin: string;
  newPassword: string;
  newEmail: string;
  editIndex: number;
  isCheck = true;
  delColor = 'rgb(250, 26, 26)';
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if (this.newLogin !== '' && this.newPassword !== '' && this.newEmail !== '') {
      const user = {
        login: this.newLogin,
        pass: this.newPassword,
        email: this.newEmail
      };
      this.users.push(user);
      this.newLogin = '';
      this.newPassword = '';
      this.newEmail = '';
    }
  }

  delete(index: number): void {
    this.users.splice(index, 1);
  }

  edit(index: number): void {
    this.newLogin = this.users[index].login;
    this.newPassword = this.users[index].pass;
    this.newEmail = this.users[index].email;
    this.editIndex = index;
    this.isCheck = false;
    this.delColor = 'rgba(250, 26, 26, 0.5)';
  }

  save(): void {
    this.users[this.editIndex].login = this.newLogin;
    this.users[this.editIndex].pass = this.newPassword;
    this.users[this.editIndex].email = this.newEmail;
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
    this.editIndex = null;
    this.isCheck = true;
    this.delColor = 'rgb(250, 26, 26)';
  }
}
