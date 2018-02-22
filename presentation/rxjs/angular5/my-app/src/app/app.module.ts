import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { SearchService } from './../services/search.service';
import {HttpModule} from '@angular/http'; 

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
