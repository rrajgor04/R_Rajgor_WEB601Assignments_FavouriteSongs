import { Component } from '@angular/core';
import { LogUpdateService } from './log-update.service';
import { SongService } from './services/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'R_Rajgor_FavouriteSongs';
  topSongContent: any = {};
  defaultSongImage: string = 'https://cdn.saleminteractivemedia.com/shared/images/default-cover-art.png';

  
  constructor(private SongService: SongService, private logUpdateService: LogUpdateService){}

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  ngOnInit(){
    this.logUpdateService.init();
    this.SongService.getSongById(4).subscribe(content => this.topSongContent = content);
  }
}
