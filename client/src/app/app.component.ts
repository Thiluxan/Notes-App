import { Component } from '@angular/core';
import { AuthenticateService } from './services/authentication/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private authenticate:AuthenticateService){}

  authenticated = this.authenticate.isAuthenticated()

  signout(){
    this.authenticate.logout()
    window.location.replace("/login")
  }
}


