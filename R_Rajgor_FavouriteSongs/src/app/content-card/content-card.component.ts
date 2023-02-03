import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import  { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList(); 

    this.contentList.add({id: 0,
      title: "Call Out My Name",
      description: "Call Out My Name is a song recorded by Canadian singer the Weeknd, taken from his first EP, My Dear Melancholy, released on March 30, 2018. The Weeknd co-wrote the song with his producer Frank Dukes, with Nicolas Jaar receiving writing credits for the sampling of his 2016 song Killing Time. The song was sent to rhythmic contemporary radio on April 10, 2018, as the EP's first single in the United States.It has been alleged that the song is about his relationship with Selena Gomez, whom he dated in 2017.",
      creator: "The Weeknd",
      imgURL: "https://i.pinimg.com/564x/6e/94/4f/6e944fa0287eed143109b99353c48e69.jpg",
      type: "R&B/Soul"    
    })

    this.contentList.add({id: 1,
      title: "Jimmy Cooks",
      description: "Jimmy Cooks is a song by Canadian rapper Drake featuring Atlanta-based rapper 21 Savage. It was released on June 17, 2022, from Drake's seventh studio album Honestly, Nevermind. The song is the only track from the album to have a guest appearance, and was dubbed a standout track by HotNewHipHop.Four months prior to its official release as a single, Jimmy Cooks debuted at number one on the US Billboard Hot 100, becoming Drakes eleventh and 21 Savages second number-one hit on the chart. Later, the song impacted contemporary hit radio on October 11, as the album's third single.",
      creator: "Drake, 21 Savage",
      imgURL: "https://i1.sndcdn.com/artworks-nmiV5MTSfGSS-0-t500x500.jpg",
      type: "Hip-Hop, trap"    
    })

    this.contentList.add({id: 1,
      title: "Believer",
      description: "Believer is a song by American rock band Imagine Dragons. The song was released on February 1, 2017, through Interscope Records and Kidinakorner as the lead single from the band's third studio album, Evolve (2017). It was written by Dan Reynolds, Wayne Sermon, Ben McKee, Daniel Platzman, Justin Tranter and its producers Mattman & Robin.",
      creator: "Dan Reynolds, Wayne Sermon Ben McKee, Daniel Platzman, Robin Fredriksson, Mattias Larsson, Justin Tranter",
      imgURL: "https://slm-assets.secondlife.com/assets/16977531/view_large/Believer_Imagine_Dragons.jpg?1492789733",
      type: "Arena rock, pop rock"    
    })
  }

}
