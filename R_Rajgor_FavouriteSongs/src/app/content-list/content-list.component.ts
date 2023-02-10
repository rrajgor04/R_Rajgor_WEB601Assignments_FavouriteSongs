import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[];

  loggingIDnTitle(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  constructor(){
    this.contents = [
      {
        id: 0,
        title: "Call Out My Name",
        description: "Call Out My Name is a song recorded by Canadian singer the Weeknd, taken from his first EP, My Dear Melancholy, released on March 30, 2018. The Weeknd co-wrote the song with his producer Frank Dukes, with Nicolas Jaar receiving writing credits for the sampling of his 2016 song Killing Time. The song was sent to rhythmic contemporary radio on April 10, 2018, as the EP's first single in the United States.It has been alleged that the song is about his relationship with Selena Gomez, whom he dated in 2017.",
        creator: "The Weeknd",
        imgURL: "https://i.pinimg.com/564x/6e/94/4f/6e944fa0287eed143109b99353c48e69.jpg",
        type: "R&B/Soul"    
      },
      {
        id: 1,
        title: "Jimmy Cooks",
        description: "Jimmy Cooks is a song by Canadian rapper Drake featuring Atlanta-based rapper 21 Savage. It was released on June 17, 2022, from Drake's seventh studio album Honestly, Nevermind. The song is the only track from the album to have a guest appearance, and was dubbed a standout track by HotNewHipHop.Four months prior to its official release as a single, Jimmy Cooks debuted at number one on the US Billboard Hot 100, becoming Drakes eleventh and 21 Savages second number-one hit on the chart. Later, the song impacted contemporary hit radio on October 11, as the album's third single.",
        creator: "Drake, 21 Savage",
        imgURL: "https://i1.sndcdn.com/artworks-nmiV5MTSfGSS-0-t500x500.jpg",
        type: "Hip-Hop, trap"    
      },
      {
        id: 2,
        title: "Believer",
        description: "Believer is a song by American rock band Imagine Dragons. The song was released on February 1, 2017, through Interscope Records and Kidinakorner as the lead single from the band's third studio album, Evolve (2017). It was written by Dan Reynolds, Wayne Sermon, Ben McKee, Daniel Platzman, Justin Tranter and its producers Mattman & Robin.",
        creator: "Dan Reynolds, Wayne Sermon Ben McKee, Daniel Platzman, Robin Fredriksson, Mattias Larsson, Justin Tranter",
        imgURL: "https://slm-assets.secondlife.com/assets/16977531/view_large/Believer_Imagine_Dragons.jpg?1492789733",
        type: "Arena rock, pop rock"    
      },
      {     
      id: 3,
        title: "Everyone dies in their nightmare",
        description: "Everybody Dies in Their Nightmares is a song by American rapper XXXTentacion from his debut studio album 17 (2017). It was produced by Potsu.",
        creator: "Jahseh Onfroy ,Ciara Nicole Simms",
        imgURL:"https://i1.sndcdn.com/artworks-ge8lkaClvVOtTLL2-J1uYZQ-t500x500.jpg",
        type: "Hip-Hop"  
      },

      {
        id:4 ,
        title: "Perfect",
        description: "Perfect is a song by English singer-songwriter Ed Sheeran from his third studio album,2017. After the album's release, it charted at number four on the UK Singles Chart.On 21 August 2017, Billboard announced that Perfect would be the fourth single from the album.The song was serviced to pop radio on 26 September 2017 as the third single from the album in the United States (fourth overall).Originally peaking at number four in March 2017, the song re-entered the UK charts later that year.",
        creator: "Ed Sheeran ,Will Hicks",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
        type: "Romantic"
      }, 
      {
        id:5 ,
        title: "Creepin' ",
        description: "Creepin Metro Boomin, the Weeknd and 21 Savage song, a song by American producer Metro Boomin, Canadian singer The Weeknd and rapper 21 Savage (2022).",
        creator: "Metro Boomin, the Weeknd and 21 Savage",
        imgURL: "https://i1.sndcdn.com/artworks-UdXgRYwFJi7utJJM-pGG8kA-t500x500.jpg",
        type: "Pop"
      }


    ];
  }
}
