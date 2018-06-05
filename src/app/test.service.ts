import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';


import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable()
export class TestService {
  constructor(private http: Http) { }
  getTodos() {
    return this.http.get('https://api.myglamapp.pl/api/categories?language=EN');

  }
}
