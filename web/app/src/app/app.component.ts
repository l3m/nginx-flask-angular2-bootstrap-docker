import {Component, Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ApiService, ButtonText } from './api.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  model = 1;
  name = 'Angular-Bootstrap';
  json = JSON;

  _thirdButtonText : ButtonText;
  errorMessage: string;

  constructor(private api: ApiService) {

  }

  ngOnInit () { this.callApi(); }

  callApi () {
    this.api.callApi().subscribe(
      thirdButtonText => this.thirdButtonText = thirdButtonText,
      error => this.errorMessage = <any>error);
  }

  get thirdButtonText() : ButtonText {
    return this._thirdButtonText;
  }
  set thirdButtonText(bt : ButtonText) {
    this._thirdButtonText = bt;
  }
}

