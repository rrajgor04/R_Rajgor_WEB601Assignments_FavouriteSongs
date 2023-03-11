import { Component } from '@angular/core';
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

  
  constructor(private SongService: SongService){}

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  ngOnInit(){
    this.SongService.getSongById(4).subscribe(content => this.topSongContent = content);
  }
}
