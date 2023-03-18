import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getSongs(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return this.http.get<Content[]>("api/songs");
  }

  addSong(newSong: Content){
    this.messageService.addMessage("New Song Added");
    return this.http.post<Content>("api/songs", newSong, this.httpOptions);
  }

  getSongById(id: number): Observable<any> {
    const content = contents.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}
