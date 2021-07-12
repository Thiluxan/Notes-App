import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':localStorage.getItem('jwtToken')!
    })
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  url = 'http://localhost:5000/notes';

  constructor(private http:HttpClient) { }

  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.url,httpOptions);
  }

  deleteNote(id?:String):Observable<Note>{
    return this.http.delete<Note>(`${this.url}/note/${id}`,httpOptions);
  }

  addNote(note:Note):Observable<Note>{
    return this.http.post<Note>(this.url,note,httpOptions);
  }

  updateNote(note:Note,id:String):Observable<Note>{
    return this.http.put<Note>(`${this.url}/note/${id}`,note,httpOptions);
  }
}
