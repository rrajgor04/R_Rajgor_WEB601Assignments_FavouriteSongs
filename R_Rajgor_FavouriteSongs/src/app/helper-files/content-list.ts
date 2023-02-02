import { Content } from "./content-interface";

export class ContentList{
    private contents: Content[];

    constructor(){
        this.contents = [];
    }

    get contentsList(){
        return this.contents;
    }

    add(content: Content){
        this.contents.push(content);
    }

    count(){
        return this.contents.length;
    }

    getContentDetails(index: number){
        let content = this.contents[index];
        return `
        <div>
        <h1>${content.title}</h1>
        <img src="${content.imgURL}">
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        <p>Type: ${content.type}</p>
        </div><br>`;
    }

}
