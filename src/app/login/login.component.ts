import { Token } from './../model/token';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public user = new User();
public token: Token;
submitted = false;
data: any;


  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {

  this.data = this.userService.loadData().subscribe(
    data => {this.data = data;});
  }


  onSubmit()
  {
    this.submitted = true;
      this.userService.loginUser(this.user).subscribe(token =>{this.token = token})
      console.log("TODO: remove this -- Logged user: " + this.token.toString());
      this.router.navigate(['/profile']);
  }

 
}
