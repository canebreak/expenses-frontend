import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public user = new User();
public loggedUser: Object;
submitted = false;


  constructor(private userService, UserService) { }

  ngOnInit() {
  }


  onSubmit()
  {
    this.submitted = true;
      this.loggedUser = this.userService.loginUser(this.user);
      console.log("TODO: remove this -- Logged user: " + this.loggedUser);
  }

 
}
