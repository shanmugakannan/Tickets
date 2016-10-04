import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import {CommandComponent} from "./command.component";
import { FormsModule }   from '@angular/forms';
import { InputComponent } from './input.component';
import { HttpModule} from '@angular/http';
import {ApiService} from '../services/api.service';
import {TicketService} from '../services/ticket.service';

@NgModule({
  imports: [
    BrowserModule,MdButtonModule,FormsModule,HttpModule
  ],
  declarations: [
    AppComponent,CommandComponent,InputComponent
  ],
  providers:[ApiService,TicketService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
