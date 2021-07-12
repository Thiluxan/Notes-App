import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { AuthenticateService } from 'src/app/services/authentication/authenticate.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note:Note = history.state.note;

  constructor(private authenticate:AuthenticateService) { }

  ngOnInit(): void {
    if(!this.authenticate.isAuthenticated()){
      window.location.replace("/login")
    }
  }

}
