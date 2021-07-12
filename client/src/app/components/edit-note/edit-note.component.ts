import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note';
import { AuthenticateService } from 'src/app/services/authentication/authenticate.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  id:String = history.state.note._id;
  title:String = history.state.note.title;
  content:String = history.state.note.content;
  author:String = history.state.note.author;
  createdAt:String = history.state.note.createdAt;

  constructor(private notesService:NotesService, private authenticate:AuthenticateService) { }

  ngOnInit(): void {
    if(!this.authenticate.isAuthenticated()){
      window.location.replace("/login")
    }
  }

  onSubmit(){
    const note:Note = {
      title:this.title,
      content:this.content,
      author:this.author,
      createdAt: this.createdAt
    }
    this.notesService.updateNote(note,this.id).subscribe(note => {
      alert('Updated');
      window.location.replace('/notes')
    })
  }

}
