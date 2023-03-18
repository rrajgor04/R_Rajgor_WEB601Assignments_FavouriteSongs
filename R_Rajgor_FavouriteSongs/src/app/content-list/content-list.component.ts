import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  defaultSongImage: string = 'https://cdn.saleminteractivemedia.com/shared/images/default-cover-art.png';
  title: string = '';
  isTitleExists: boolean | null = null;

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  addContent(content: Content){
    this.SongService.addSong(content).subscribe(newSongBack => {
      this.contents.push(newSongBack);
      this.contents = [...this.contents];
    })
  }

  searchForTitle(){
    this.isTitleExists = this.contents.some(content => content.title === this.title);
  }

  constructor(private SongService: SongService){}

  ngOnInit(){
    this.SongService.getSongs().subscribe(songs => this.contents = songs);
  }
}
