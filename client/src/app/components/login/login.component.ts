import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authentication/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!:String;
  password!:String;

  constructor(private authenticate:AuthenticateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authenticate.login(this.email,this.password).subscribe(token => {
      console.log(token.token)
      localStorage.setItem('jwtToken',token.token.toString())
      window.location.replace('/notes')
    })
  }
}
