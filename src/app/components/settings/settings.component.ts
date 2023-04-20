import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Settings } from 'src/app/models/Settings';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  
  constructor(private settingsService: SettingsService) {
    this.settings = new Settings();
  }

  ngOnInit(): void {
    this.settingsService.getSettings().pipe(
      map(data => {
        this.settings = data;
      })
    ).subscribe();
  }
}
