import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './service/settings.service';
import { EnigmaComponent } from './components/enigma/enigma.component';
import { EnigmaService } from './service/enigma.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    EnigmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    SettingsService,
    EnigmaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
