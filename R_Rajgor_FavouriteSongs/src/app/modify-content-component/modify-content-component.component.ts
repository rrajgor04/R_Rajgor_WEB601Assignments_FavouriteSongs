import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  newContent: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  constructor(public dialog: MatDialog){}

  openContentDialog(){
    const dialogRef = this.dialog.open(AddContentDialogComponent);

    dialogRef.afterClosed().subscribe(newSong => {
      if(newSong){
        this.newContent = newSong;
        this.addContent();
      }
    })
  }

  addContent(){
    this.onCreation.emit(this.newContent);
    this.newContent = {};
  }

}
