import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Settings } from '../../models/Settings';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings = new Settings();
  rotorSizes: Array<number> = new Array();
  plugsSizes: Array<number> = new Array();
  
  constructor(private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.settingsService.getSettings().pipe(
      map(data => {
        this.settings = data;
        this.rotorSizes = Array(data.positions.length);
        this.plugsSizes = Array(data.plugs.length);
      })
    ).subscribe();
  }

  saveSettings() {
    this.settings.positions.length = this.rotorSizes.length;
    this.settings.rotors.length = this.rotorSizes.length;
    this.settings.plugs.length = this.plugsSizes.length;
    this.settingsService.saveSettings(this.settings).subscribe();
  }

}
