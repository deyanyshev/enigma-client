import { Component } from '@angular/core';
import { map } from 'rxjs';
import { EnigmaService} from 'src/app/service/enigma.service';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.css']
})
export class EnigmaComponent {
  enigmaText: string = "";
  result: string = "";

  constructor(private enigmaService: EnigmaService) {
  }

  encrypt() {
    this.enigmaService.encrypt(this.enigmaText).pipe(
      map(data => {
        this.result = data.result;
      })
    ).subscribe();
  }

  decrypt() {
    this.enigmaService.decrypt(this.enigmaText).pipe(
      map(data => {
        this.result = data.result;
      })
    ).subscribe();
  }
}
