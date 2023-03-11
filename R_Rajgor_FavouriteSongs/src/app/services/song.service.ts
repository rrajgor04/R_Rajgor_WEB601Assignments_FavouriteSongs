import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private messageService: MessageService) { }

  getSongs(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return of(contents);
  }

  getSongById(id: number): Observable<any> {
    const content = contents.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}
