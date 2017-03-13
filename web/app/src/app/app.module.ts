import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from "@angular/http";

import { AppComponent }   from './app.component';
import { ApiService, ButtonText }     from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, NgbModule.forRoot() ],
  declarations: [ AppComponent ],
  providers:    [ ApiService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
