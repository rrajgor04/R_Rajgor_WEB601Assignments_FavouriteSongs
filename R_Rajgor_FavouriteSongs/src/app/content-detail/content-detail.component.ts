import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultSongImage: string = 'https://cdn.saleminteractivemedia.com/shared/images/default-cover-art.png';

  constructor(private route:ActivatedRoute, private songsService: SongService){}

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.songsService.getSongById(this.id).subscribe(song => {
        this.content = song;
      });
    })
  }
}
