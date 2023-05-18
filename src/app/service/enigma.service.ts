import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class EnigmaService {
    
    constructor(private http: HttpClient) {
    }

    encrypt(text: string) {
        return this.http.get<any>(`api/enigma/encrypt/${text}`);
    }

    decrypt(text: string) {
        return this.http.get<any>(`api/enigma/decrypt/${text}`);
    }
}