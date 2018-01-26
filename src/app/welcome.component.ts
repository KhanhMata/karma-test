import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-welcome',
  template: `
    <h3 class="welcome">{{ welcome }}</h3>
  `,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome = '-- nothing --';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name :
      'Please log in.';
  }

}
