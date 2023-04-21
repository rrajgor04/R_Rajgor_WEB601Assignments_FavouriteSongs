import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates:SwUpdate, private snackBar: MatSnackBar) { }

  public init(){
    console.log('log update fired');
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`current version: ${event.currentVersion.hash}`);
          console.log(`New version : ${event.latestVersion.hash}`);
          const bar = this.snackBar.open('New version available', 'Reload');
          bar.onAction().subscribe(()=>{
            this.updates.activateUpdate().then(()=>{
              document.location.reload;
            });
          });
      }
    })
  }
}
