import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Serializer} from "@angular/compiler";
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {
  }

  public getSettings() {
    return this.http.get<Settings>(`api/settings/get`);
  }
}