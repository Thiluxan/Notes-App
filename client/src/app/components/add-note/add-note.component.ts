import { AUTO_STYLE } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import {Note} from '../../models/note';
import { AuthenticateService } from 'src/app/services/authentication/authenticate.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  title!:String;
  author!:String;
  content!:String;

  constructor(private notesService:NotesService,private authenticate:AuthenticateService) { }

  ngOnInit(): void {
    if(!this.authenticate.isAuthenticated()){
      window.location.replace("/login")
    }
  }

  onSubmit(){

    const note = {
      title:this.title,
      content:this.content,
      author:this.author,
      createdAt:Date().toString()
    }

    this.notesService.addNote(note).subscribe(note => {
      alert('Added successfully')
      window.location.replace('/notes');
    })
  }

}
