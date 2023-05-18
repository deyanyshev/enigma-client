import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {
  }

  public saveSettings(settings: Settings) {
    return this.http.post('api/settings/put', settings);
  }

  public getSettings() {
    return this.http.get<any>('api/settings/get');
  }
}