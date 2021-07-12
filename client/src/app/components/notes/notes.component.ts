import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { AuthenticateService } from 'src/app/services/authentication/authenticate.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes:Note[] = [];

  constructor(private notesService:NotesService,private authenticate:AuthenticateService) { }

  ngOnInit(): void {
    if(!this.authenticate.isAuthenticated()){
      window.location.replace("/login")
    }
    this.notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    })
    console.log(localStorage.getItem('jwtToken'))
  }

  deleteNote(note:Note){
    console.log("delete")
    console.log(note._id)
    this.notesService.deleteNote(note._id).subscribe(note =>{
      alert('Deleted');
      window.location.reload();
    })
  }

}
