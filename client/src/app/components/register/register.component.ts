import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authentication/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!:String;
  email!:String;
  password!:String;

  constructor(private authenticate:AuthenticateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authenticate.register(this.email,this.password,this.name).subscribe(res => {
      alert('Registered Successfully')
      window.location.replace("/login")
    })
  }

}
