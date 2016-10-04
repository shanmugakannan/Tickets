import { Component } from '@angular/core';
import '../../public/css/styles.css';
import {Ticket} from './ticket';
import {TicketService} from '../services/ticket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private ticketservice:TicketService) {
        this.ticketservice.getTickets()
            .subscribe(res => this.tickets = res.json())
    }
    tickets:Ticket[];

    OnProcessTicket(result:string)
    {
        console.log(result);
    }
}




