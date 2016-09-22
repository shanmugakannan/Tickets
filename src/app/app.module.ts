import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import {CommandComponent} from "./command.component";


@NgModule({
  imports: [
    BrowserModule,MdButtonModule
  ],
  declarations: [
    AppComponent,CommandComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
